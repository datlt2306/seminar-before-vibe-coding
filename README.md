# Hôm Nay Ăn Gì?

Project mẫu dùng cho seminar: **"BEFORE VIBE CODING - Chuẩn bị gì trước khi để AI code?"**

Đây là một web app nhỏ, viết bằng HTML/CSS/JavaScript thuần, không dùng framework hay backend. Mục tiêu là để sinh viên tập trung vào cách chuẩn bị và làm việc với AI, không bị phân tâm bởi công nghệ.

---

## 1. Bài toán

Mỗi trưa hay tối, sinh viên và người đi làm hay mất thời gian nghĩ xem: "Hôm nay ăn gì?".

Project này giải quyết việc đó:
- Hiển thị danh sách món ăn kèm giá và loại món.
- Cho phép bấm lọc theo loại (Cơm, Món nước, Món nướng...).
- Cho phép tìm kiếm món theo tên (phần này để dành làm demo với AI).

---

## 2. Người dùng

- **Sinh viên:** Cần tìm món nhanh, giá bình dân.
- **Người đi làm:** Cần xem thực đơn đa dạng, rõ giá và nguyên liệu.

---

## 3. Công nghệ

- HTML5
- CSS3 (Flexbox, CSS Grid)
- JavaScript thuần (ES6+)
- Dữ liệu để trong file `data/mon-an.js`

Không dùng: React, Vue, Tailwind, Node.js, database hay bất kỳ thư viện ngoài nào.

---

## 4. Cách chạy

Không cần cài đặt gì:
- Cách 1: Bấm đúp vào `index.html` để mở thẳng trên trình duyệt.
- Cách 2: Mở thư mục bằng VS Code rồi chọn **Open with Live Server**.

---

## 5. Cấu trúc thư mục

```text
seminar/
├── index.html          # Giao diện chính
├── style.css           # CSS giao diện
├── app.js              # Logic hiển thị và lọc món
├── data/
│   └── mon-an.js       # Dữ liệu 10 món ăn mẫu
├── README.md           # Giới thiệu project (file này)
├── YEU-CAU.md          # Yêu cầu tính năng và phạm vi
├── QUY-TAC.md          # Quy tắc khi làm việc với AI
├── SEMINAR-SCRIPT.md   # Kịch bản 120 phút cho 2 giảng viên
├── INTERACTION.md      # 6 câu hỏi tương tác với sinh viên
├── DEMO-PROMPTS.md     # 5 prompt dùng khi live demo
├── SLIDES.md           # Nội dung 18 slide trình chiếu
└── CHECKLIST.md        # Danh sách kiểm tra trước khi giao AI code
```

---

## 6. Chức năng hiện tại (trước demo)

- [x] Hiển thị 10 món ăn từ file `data/mon-an.js`.
- [x] Lọc món theo loại (Tất cả, Món nước, Cơm, Bún, Bánh mì, Món nướng, Món xào).
- [x] Hiển thị số lượng món đang xem.
- [ ] **Tìm kiếm:** Giao diện ô nhập đã có sẵn, nhưng chưa có code JavaScript. Đây là phần sẽ giao cho AI làm trong buổi demo.

---

## 7. Những gì KHÔNG làm trong project này

Để tránh lan man và giúp AI không tự ý thêm tính năng thừa:
- Không có đăng nhập / đăng ký.
- Không có giỏ hàng, đặt món hay thanh toán.
- Không có database, không gọi API bên ngoài.
- Không gắn chatbot hay gọi API của OpenAI/Gemini vào code.
