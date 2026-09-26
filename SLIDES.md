# NỘI DUNG 20 SLIDE SEMINAR

Tài liệu này dùng để đưa nội dung lên slide trình chiếu.  
Mỗi slide được thiết kế ít chữ, rõ ý, hỗ trợ giảng viên khi nói và demo.

---

<!-- slide -->
## Slide 1: Tiêu đề

# BEFORE VIBE CODING
### Chuẩn bị gì trước khi để AI code?

- **Giảng viên 1:** Thầy Ngô Văn Ngọc
- **Giảng viên 2:** Thầy Lê Trọng Đạt
- **Thời lượng:** 120 phút (Online)

---

<!-- slide -->
## Slide 2: Câu hỏi mở đầu

# Trải nghiệm quen thuộc với AI

- Giao việc: AI viết code rất nhanh, giao diện đẹp ngay.
- 30 phút sau: Phát sinh lỗi nhỏ.
- 1 tiếng sau: Càng sửa càng lỗi, code phình to.
- Cuối cùng: Xóa đi làm lại từ đầu.

> **Vấn đề nằm ở AI hay ở cách chúng ta bắt đầu?**

---

<!-- slide -->
## Slide 3: Thử cho AI code ngay

# Giao cho AI một câu lệnh:

> **"Hãy xây dựng website Hôm Nay Ăn Gì?"**

### Theo bạn:
AI đã có **đủ thông tin** để code đúng thứ bạn muốn chưa?

- **[ A ] CÓ**
- **[ B ] KHÔNG**

---

<!-- slide -->
## Slide 4: AI phải tự đoán điều gì?

# Khi đề bài mơ hồ, AI sẽ tự đoán:

- **Công nghệ:** Tự chọn framework hoặc thư viện ngoài.
- **Dữ liệu:** Tự bịa cấu trúc và dữ liệu mẫu.
- **Giao diện:** Tự quyết định bố cục và màu sắc.
- **Tính năng:** Tự thêm đăng nhập, thanh toán, giỏ hàng...

> Mỗi thứ AI phải tự đoán đều có thể sinh ra lỗi.

---

<!-- slide -->
## Slide 5: Case study

# Case study: "HÔM NAY ĂN GÌ?"

- **Vấn đề:** Mất 15–30 phút mỗi ngày chỉ để nghĩ xem nên ăn gì.
- **Mục tiêu:** Giúp chọn món nhanh trong vòng 30 giây.
- **Cách tiếp cận:** Giữ ứng dụng thật đơn giản, không phức tạp hóa.

---

<!-- slide -->
## Slide 6: Người dùng

# Người dùng của ứng dụng là ai?

### 1. Sinh viên
- Ngân sách bình dân (dưới 50.000đ).
- Cần món nhanh, quen thuộc, gần trường.

### 2. Người đi làm
- Cần đổi món trưa mỗi ngày.
- Cần biết rõ giá và nguyên liệu.

---

<!-- slide -->
## Slide 7: Các chức năng

# Danh sách tính năng có thể nghĩ ra:

1. Xem danh sách món ăn
2. Tìm kiếm món theo tên
3. Lọc món theo loại (Cơm, Món nước, Món nướng...)
4. Đăng nhập tài khoản
5. Đặt món và thanh toán trực tuyến
6. Xem thông tin chi tiết của món
7. Đánh giá và bình luận
8. Chat với trợ lý ảo

---

<!-- slide -->
## Slide 8: Phạm vi phiên bản đầu tiên

# Chọn gì cho Phiên bản 1 (MVP)?

### Làm (Trong phạm vi):
- Xem danh sách món ăn
- Lọc theo loại món
- Tìm kiếm món theo tên
- Xem thông tin cơ bản trên thẻ món

### KHÔNG làm (Ngoài phạm vi):
- Không đăng nhập, không giỏ hàng, không thanh toán.
- Không database, không gọi API AI trong code.

---

<!-- slide -->
## Slide 9: Một yêu cầu chưa đủ rõ

# Yêu cầu mơ hồ:

> *"Làm cho em chức năng lọc món ăn."*

### AI sẽ không biết:
- Lọc theo tiêu chí nào? (giá, loại hay tên?)
- Giao diện thao tác bằng gì? (nút bấm, dropdown hay ô tick?)
- Khi không có món nào thì hiện gì?
- Khi bấm "Tất cả" thì làm sao?

---

<!-- slide -->
## Slide 10: Yêu cầu rõ hơn

# Yêu cầu rõ ràng:

- **Giao diện:** Các nút bấm loại món (Tất cả, Cơm, Món nước...).
- **Thao tác:** Bấm nút nào thì nút đó đổi trạng thái active.
- **Dữ liệu:** Lọc mảng theo trường `mon.loai`.
- **Trường hợp không có kết quả:** Hiện thông báo *"Không tìm thấy món ăn nào"*.

---

<!-- slide -->
## Slide 11: Bài tập cá nhân (3 phút)

# ⏱️ Thử thách 3 phút

### Đề bài:
Viết **2 đến 3 gạch đầu dòng** mô tả yêu cầu cho chức năng:  
👉 **"TÌM KIẾM MÓN ĂN"**

*(Gõ câu trả lời vào khung chat)*

---

<!-- slide -->
## Slide 12: Project cần chuẩn bị

# Chuẩn bị project mẫu

```text
hom-nay-an-gi/
├── index.html       # Bộ khung giao diện
├── style.css        # CSS giao diện
├── app.js           # Logic hiển thị và lọc danh mục
└── data/mon-an.js   # 10 món ăn mẫu
```

- Dùng HTML, CSS, JavaScript thuần.
- Không dùng thư viện để tập trung vào cách làm việc với AI.

---

<!-- slide -->
## Slide 13: AI cần bối cảnh

# Cung cấp bối cảnh cho AI

AI chỉ biết những gì ta cung cấp cho nó:

- 📄 **README.md:** Giới thiệu project và trạng thái ban đầu.
- 📋 **YEU-CAU.md:** Bài toán, người dùng, việc cần làm và việc không làm.
- 📐 **QUY-TAC.md:** Các giới hạn mà AI bắt buộc phải tuân theo.

---

<!-- slide -->
## Slide 14: Quy tắc

# 8 Quy tắc khi làm việc với AI

1. Không tự ý mở rộng phạm vi.
2. Không tự ý cài thư viện mới.
3. Không sửa các phần không liên quan.
4. Giữ nguyên cấu trúc project.
5. Không tự ý sửa dữ liệu mẫu.
6. Tự kiểm tra lại sau khi sửa.
7. Yêu cầu chưa rõ thì phải hỏi lại.
8. Hoàn thành phải báo cáo những gì đã sửa.

---

<!-- slide -->
## Slide 15: Bắt đầu Live Demo

# Live Demo 4 Task cùng Thầy Lê Trọng Đạt

1. **Task 1:** Tìm kiếm theo tên (Quy trình chuẩn: Đọc → Lập plan → Duyệt → Code).
2. **Task 2:** Yêu cầu thay đổi (Tìm theo nguyên liệu).
3. **Task 3:** Tính năng mới "Chọn hộ tôi 1 món!" (Random Pick).
4. **Task 4:** Lọc theo khoảng giá & Tình huống bắt lỗi khi AI làm bậy.

---

<!-- slide -->
## Slide 16: Task 1 — Tìm kiếm món ăn

# Đừng để AI code ngay — Bắt lập kế hoạch trước!

- Cho AI đọc toàn bộ project (chưa cho sửa file).
- Giao task và yêu cầu AI lập kế hoạch 4 bước.

### 💬 THẢO LUẬN:
> Các bạn nhìn kế hoạch của AI trên màn hình:  
> **Chúng ta có DUYỆT để AI bắt đầu code không? Vì sao?**

---

<!-- slide -->
## Slide 17: Task 2 — Khi yêu cầu thay đổi

# Khách hàng đổi ý giữa chừng

> *"Tìm cả theo tên món VÀ theo NGUYÊN LIỆU."*

- **Sai lầm:** Vội vàng bảo AI sửa code ngay.
- **Cách làm đúng:** Bắt AI phân tích xem thay đổi này ảnh hưởng đến:
  - Dữ liệu? (Đã có sẵn, không sửa).
  - Logic? (Thêm điều kiện `some()`).
  - Giao diện? (Sửa placeholder ô tìm kiếm).

---

<!-- slide -->
## Slide 18: Task 3 — "Chọn hộ tôi 1 món!"

# Tính năng mới: Gợi ý ngẫu nhiên

- Thêm nút: **"🎲 Chọn hộ tôi 1 món!"**
- Random 1 món trong danh sách đang lọc.
- Highlight thẻ món đó trên màn hình.

> **Cảnh báo trước với AI:** Tuyệt đối không cài thư viện ngoài!

---

<!-- slide -->
## Slide 19: Task 4 — Bắt lỗi AI khi giao việc ẩu

# Thử nghiệm: Prompt kiểu "Vibe Coding"

> *"Thêm bộ lọc giá cho tôi."*

- AI tự đoán: Tự chế slider phức tạp, phá vỡ CSS.
- **Bài học:** Lỗi không phải do AI dốt, mà do người giao việc cẩu thả.
- **Kéo AI về kỷ luật:** Đưa đặc tả 4 nút lọc giá đơn giản + 8 quy tắc!

---

<!-- slide -->
## Slide 20: Quy trình BEFORE VIBE CODING

# 10 bước làm việc cùng AI

```text
Ý tưởng 
→ Làm rõ bài toán 
→ Xác định yêu cầu 
→ Xác định phạm vi 
→ Chuẩn bị project 
→ Cung cấp bối cảnh 
→ Đặt quy tắc 
→ Chia nhiệm vụ 
→ Giao AI thực hiện 
→ Kiểm tra kết quả & Xử lý thay đổi
```

> **"AI giúp viết code nhanh hơn, nhưng chính ta phải là người chuẩn bị và tổ chức công việc."**
