# BỘ CÂU HỎI TƯƠNG TÁC VỚI SINH VIÊN

Tài liệu này ghi lại các hoạt động tương tác trong suốt 120 phút seminar online.  
Giảng viên chỉ cần mở file này để đặt câu hỏi và chốt ý với sinh viên qua khung chat hoặc mic.

---

## PHẦN 1: TƯ DUY VÀ CHUẨN BỊ (Thầy Ngô Văn Ngọc)

### Câu 1: AI đã đủ thông tin chưa?
- **Thời điểm:** Khoảng phút 12 – 15.
- **Hình thức:** Khung chat hoặc bình chọn Poll (CÓ / KHÔNG).
- **Câu hỏi:**
  > "Nếu bây giờ tôi giao cho AI một câu:  
  > **'Hãy xây dựng website Hôm Nay Ăn Gì?'**  
  > Theo các bạn, AI đã có đủ thông tin để code ra đúng thứ mình muốn chưa?"
- **Chờ sinh viên trả lời:** Đa phần sẽ chọn **KHÔNG**.
- **Chốt:**
  > "Hầu hết các bạn đều trả lời KHÔNG. Nhưng khi làm bài tập hay đồ án, nhiều bạn vẫn đang mở AI lên và gõ đúng một câu như vậy. Khi ta không cho AI đủ thông tin, nó sẽ bắt đầu tự đoán."

---

### Câu 2: AI phải tự đoán những gì?
- **Thời điểm:** Khoảng phút 16 – 20.
- **Hình thức:** Cho sinh viên gõ tự do vào khung chat.
- **Câu hỏi:**
  > "Nếu chỉ nhận một câu yêu cầu chung chung như vậy, theo các bạn AI sẽ phải tự quyết định những gì thay cho mình?"
- **Chờ sinh viên trả lời:** Sinh viên chat: tự chọn thư viện, tự nghĩ giao diện, tự bịa database, tự thêm đăng nhập, tự làm thanh toán...
- **Chốt:**
  > "Đúng vậy. AI sẽ tự đoán: công nghệ, dữ liệu, giao diện và cả tính năng. Mỗi thứ AI phải tự đoán đều có thể trở thành lỗi hoặc khiến code rối thêm. Vì vậy trước khi để AI code, mình phải là người quyết định những thứ này."

---

### Câu 3: Chọn tính năng cho phiên bản đầu tiên
- **Thời điểm:** Khoảng phút 31 – 35.
- **Hình thức:** Chiếu slide danh sách 8 tính năng, sinh viên gõ các số mình chọn vào chat.
- **Câu hỏi:**
  > "Trên màn hình có 8 tính năng:  
  > 1. Xem danh sách món ăn  
  > 2. Tìm kiếm món theo tên  
  > 3. Lọc món theo loại  
  > 4. Đăng nhập tài khoản  
  > 5. Đặt món và thanh toán  
  > 6. Xem thông tin cơ bản của món  
  > 7. Đánh giá 5 sao và bình luận  
  > 8. Chat hỏi trợ lý ảo  
  >  
  > Nếu chỉ làm phiên bản đầu tiên (MVP) để giải quyết nhanh việc chọn món, các bạn sẽ chọn những tính năng nào?"
- **Chờ sinh viên trả lời:** Sinh viên thường chọn: `1, 2, 3, 6`.
- **Chốt:**
  > "Chính xác, phiên bản đầu chỉ cần 1, 2, 3 và 6 là đủ giải quyết bài toán. Những cái còn lại (4, 5, 7, 8) chúng ta phải ghi rõ là 'Ngoài phạm vi' vào file yêu cầu để AI không tự ý viết thêm vào."

---

### Câu 4: Viết yêu cầu cho chức năng lọc món
- **Thời điểm:** Khoảng phút 40 – 43.
- **Hình thức:** Sinh viên có 3 phút tự viết vào khung chat.
- **Câu hỏi:**
  > "Thay vì chỉ nói cộc lốc với AI: *'Làm chức năng lọc món ăn'*, các bạn hãy thử viết 2 đến 3 ý mô tả rõ ràng xem chức năng này cần hoạt động như thế nào. Các bạn có 3 phút để gõ vào chat."
- **Chờ sinh viên trả lời:** Đọc 2-3 câu trả lời tốt của sinh viên trên khung chat (nút bấm là gì, lọc theo trường nào trong dữ liệu, bấm 'Tất cả' thì thế nào...).
- **Chốt:**
  > "Khi các bạn viết rõ: bấm nút nào, lọc trường dữ liệu nào, rỗng thì hiện gì... thì AI sẽ code trúng ngay lần đầu mà không cần phải đoán."

---

## PHẦN 2: THỰC CHIẾN CÙNG AI (Thầy Lê Trọng Đạt)

### Câu 5: Duyệt kế hoạch của AI (Task 1 - Tìm kiếm)
- **Thời điểm:** Khoảng phút 70 – 75.
- **Hình thức:** Mời 1-2 bạn nhận xét qua mic hoặc gõ chat.
- **Câu hỏi:**
  > "AI vừa đưa ra kế hoạch 4 bước trên màn hình để làm chức năng tìm kiếm. Các bạn đọc thử xem: Chúng ta có duyệt kế hoạch này để AI bắt đầu sửa code không? Vì sao?"
- **Chờ sinh viên trả lời:** Sinh viên nhận xét xem kế hoạch có hợp lý không, có sửa ngoài phạm vi không, có giữ lại dữ liệu cũ không.
- **Chốt:**
  > "Kế hoạch này duyệt được vì: nó chỉ sửa file `app.js`, biết kết hợp từ khóa tìm kiếm với nút lọc đang chọn, và có xử lý trường hợp không tìm thấy món. Bây giờ tôi mới cho AI bắt đầu sửa code."

---

### Câu 6: AI báo xong thì làm gì tiếp?
- **Thời điểm:** Khoảng phút 75 – 78.
- **Hình thức:** Khung chat.
- **Câu hỏi:**
  > "AI vừa báo: *'Đã hoàn thành chức năng tìm kiếm món ăn'*. Lúc này việc tiếp theo của chúng ta là gì?"
- **Chờ sinh viên trả lời:** Đa phần sinh viên trả lời: "Kiểm tra", "Test lại", "Chạy thử trên web".
- **Chốt:**
  > "Tuyệt đối không tin ngay lời AI nói là đã xong. Việc đầu tiên là mở web lên và tự tay test: tìm từ có dấu, không dấu, tìm từ không có trong danh sách, và kiểm tra xem các nút lọc cũ có còn chạy đúng không."

---

### Câu 7: Bắt lỗi AI khi giao việc cẩu thả (Task 4 - Lọc giá)
- **Thời điểm:** Khoảng phút 95 – 98.
- **Hình thức:** Khung chat / Mic.
- **Câu hỏi:**
  > "Sau khi tôi chỉ gõ đúng một câu cộc lốc: *'Thêm bộ lọc giá cho tôi'*, các bạn nhìn xem màn hình và code bị cái gì?  
  > Theo các bạn, lỗi này là do AI dốt hay do cách người giao việc?"
- **Chờ sinh viên trả lời:** Sinh viên cười và chat: "Do người giao việc không nói rõ", "Do prompt cẩu thả", "Nó tự chế slider làm vỡ giao diện rồi thầy ơi".
- **Chốt:**
  > "Đúng vậy! AI chỉ là cỗ máy suy luận từ ngữ cảnh. Nếu ta lười đưa thông tin, ta sẽ nhận lại một đống rác công nghệ. Muốn AI làm việc chuẩn, ta phải dùng lại kỷ luật: chỉ rõ các nút lọc, ranh giới file và các quy tắc cấm vi phạm."
