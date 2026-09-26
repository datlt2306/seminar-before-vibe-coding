# BỘ PROMPT LIVE DEMO (4 TASK THỰC CHIẾN)

Tài liệu này chứa toàn bộ các prompt dùng trực tiếp khi demo trên màn hình.  
Giảng viên chỉ cần copy và dán vào cửa sổ chat với AI theo đúng thứ tự 4 Task.

---

# TASK 1: XÂY DỰNG TÌM KIẾM THEO TÊN (~15 phút)

### Bước 1: Cho AI đọc project
**Mục đích:** Để AI hiểu bài toán và cấu trúc code hiện tại, dặn trước không được sửa file.

```text
Hãy đọc và phân tích project hiện tại.

Hãy cho tôi biết:
1. Project này dùng để làm gì?
2. Người dùng là ai?
3. Hiện tại project có những chức năng nào?
4. Cấu trúc project hiện tại như thế nào?

Chưa được thay đổi bất kỳ file nào.
```

---

### Bước 2: Phân tích task
**Mục đích:** Bắt AI xem trước các file và hàm liên quan, tuyệt đối chưa cho viết code.

```text
Tôi có một task cần giao:
"Xây dựng chức năng tìm kiếm món ăn theo tên."

Hãy đọc tài liệu YEU-CAU.md, QUY-TAC.md và mã nguồn hiện tại, sau đó cho tôi biết:
1. Những file nào liên quan trực tiếp đến task này?
2. Những hàm nào trong code hiện tại sẽ bị ảnh hưởng?
3. Những file hoặc thành phần nào KHÔNG được sửa để đảm bảo an toàn cho project?

LƯU Ý: Chưa viết code, chưa sửa file nào ở bước này.
```

---

### Bước 3: Bắt AI lập kế hoạch
**Mục đích:** Bắt AI nêu từng bước sẽ làm và cách kiểm thử để người hướng dẫn duyệt trước.

```text
Dựa trên phân tích vừa rồi, hãy đề xuất kế hoạch triển khai chức năng tìm kiếm theo tên món.

Kế hoạch cần nêu rõ:
1. Trình tự từng bước thực hiện là gì?
2. Logic tìm kiếm xử lý ra sao (chữ hoa/thường, tiếng Việt có dấu, kết hợp với bộ lọc danh mục hiện có thế nào)?
3. Các trường hợp kiểm thử (test cases) để kiểm tra sau khi code xong.

LƯU Ý: Vẫn chưa sửa code, chỉ đưa kế hoạch để tôi duyệt.
```

---

### Bước 4: Cho phép AI sửa code
**Mục đích:** Sau khi duyệt kế hoạch, cho phép AI sửa code và yêu cầu báo cáo lại.

```text
Kế hoạch đã được duyệt. Hãy tiến hành sửa code theo kế hoạch đó.

Yêu cầu:
1. Tuân thủ YEU-CAU.md và 8 quy tắc trong QUY-TAC.md.
2. Chỉ sửa những phần liên quan đến chức năng tìm kiếm.
3. Không cài thư viện ngoài.
4. Tự kiểm tra lại cú pháp sau khi sửa.
5. Sau khi xong, hãy báo cáo:
   - Đã sửa những file nào?
   - Đã thay đổi hoặc thêm những đoạn code nào?
   - Các bước để tôi tự test lại trên trình duyệt.
```

---

# TASK 2: XỬ LÝ KHI YÊU CẦU THAY ĐỔI (~10 phút)

### Bước 1: Yêu cầu phân tích ảnh hưởng trước khi sửa
**Mục đích:** Đổi đề bài giữa chừng (tìm theo cả nguyên liệu). Bắt AI phân tích xem ảnh hưởng những gì trước, chưa cho sửa code ngay.

```text
Chúng ta có một yêu cầu thay đổi từ người dùng:
"Tìm kiếm không chỉ theo tên món mà còn tìm được theo cả NGUYÊN LIỆU của món ăn."

Trước khi sửa code, hãy phân tích xem:
1. Dữ liệu trong data/mon-an.js có cần sửa gì không?
2. Logic trong app.js cần sửa ở những đoạn nào?
3. Giao diện (placeholder ô tìm kiếm) có cần đổi gì không?
4. Cần bổ sung những trường hợp kiểm thử nào?

LƯU Ý: Chưa sửa code ngay, hãy trả lời phân tích trước và chờ tôi xác nhận.
```

---

### Bước 2: Duyệt và cho phép cập nhật code
**Mục đích:** Cập nhật code sau khi đã xác nhận phương án.

```text
Phương án phân tích tốt. Hãy tiến hành cập nhật code trong app.js và index.html theo đúng phân tích trên. 
Không sửa bất kỳ file nào khác. Báo cáo lại sau khi hoàn thành.
```

---

# TASK 3: TÍNH NĂNG "CHỌN HỘ TÔI 1 MÓN!" (~12 phút)

### Bước 1: Giao task tính năng mới và rào trước quy tắc
**Mục đích:** Thêm nút random món. Nhắc trước không được cài thư viện modal ngoài (như Bootstrap, SweetAlert...).

```text
Tôi muốn thêm một tính năng mới: "Chọn hộ tôi 1 món!" (Gợi ý ngẫu nhiên).

Yêu cầu:
1. Thêm một nút bấm "#randomBtn" có nhãn: "🎲 Chọn hộ tôi 1 món!" nằm cạnh ô tìm kiếm trong index.html.
2. Khi bấm nút, chọn ngẫu nhiên 1 món trong số các món ĐANG HIỂN THỊ trên màn hình.
3. Cuộn màn hình tới món đó và làm nổi bật thẻ món ăn được chọn (thêm class highlight hoặc hiệu ứng viền nổi bật trong 3 giây).
4. TUYỆT ĐỐI KHÔNG cài thêm bất kỳ thư viện ngoài nào (không dùng SweetAlert, jQuery hay Bootstrap). Tự viết CSS và JS thuần.

Hãy phân tích và đưa ra kế hoạch thực hiện ngắn gọn trước khi code.
```

---

### Bước 2: Thực hiện code Task 3
**Mục đích:** Bật đèn xanh cho AI hoàn thiện tính năng random.

```text
Kế hoạch hợp lý. Hãy cập nhật code vào index.html, style.css và app.js. Sau khi xong hãy hướng dẫn tôi cách test.
```

---

# TASK 4: LỌC THEO KHOẢNG GIÁ & BẮT LỖI AI (~13 phút)

### Bước 1 (GÀI BẪY): Thử một prompt cẩu thả kiểu "Vibe Coding"
**Mục đích:** Cho sinh viên thấy hậu quả khi đưa một câu lệnh cộc lốc: AI sẽ tự đoán mò, tự bịa giao diện slider phức tạp hoặc phá vỡ CSS.

```text
Thêm bộ lọc giá cho tôi.
```

*(Sau khi AI trả lời hoặc sửa code làm vỡ giao diện/sinh ra mã nguồn phức tạp, Thầy Đạt dừng lại chỉ cho sinh viên thấy lỗi)*

---

### Bước 2: Kéo AI về kỷ luật bằng đặc tả chuẩn và 8 quy tắc
**Mục đích:** Dạy sinh viên cách lội ngược dòng: Dùng đặc tả cụ thể và quy tắc để ép AI sửa lại chuẩn mực.

```text
Dừng lại! Bạn đang tự ý làm phức tạp vấn đề và vi phạm Quy tắc 1, Quy tắc 3 trong QUY-TAC.md.

Hãy hoàn tác cách làm vừa rồi và làm lại chuẩn xác theo yêu cầu sau:
1. Giao diện: Thêm một hàng nút lọc giá nằm ngay dưới hàng lọc danh mục trong index.html:
   - Tất cả mức giá (mặc định)
   - Dưới 30k
   - 30k - 45k
   - Trên 45k
2. Logic: Lọc dựa trên trường `mon.gia`, phải kết hợp ăn khớp cùng lúc với bộ lọc loại món và ô tìm kiếm hiện có.
3. Dùng đúng class CSS đơn giản tương tự như hàng nút lọc loại món, không viết CSS rườm rà.
4. Báo cáo lại ngắn gọn sau khi hoàn thành.
```
