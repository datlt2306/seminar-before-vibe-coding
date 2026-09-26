# YÊU CẦU DỰ ÁN: HÔM NAY ĂN GÌ?

Tài liệu này ghi lại yêu cầu cụ thể của project để Developer và AI cùng đọc và hiểu giống nhau trước khi viết code.

---

## 1. Bài toán

Nhiều người mất từ 15-30 phút mỗi ngày chỉ để nghĩ xem trưa nay hoặc tối nay ăn gì.

Ứng dụng này giúp người dùng chọn món nhanh trong vòng 30 giây:
- Xem các món quen thuộc kèm giá và nguyên liệu.
- Bấm lọc nhanh theo sở thích (thèm món nước hay muốn ăn cơm).
- Gõ từ khóa để tìm món.

---

## 2. Người dùng

- **Sinh viên:** Muốn tìm món nhanh, giá dưới 50.000đ.
- **Dân văn phòng:** Muốn đổi món trưa, xem rõ giá và thành phần.

---

## 3. Mục tiêu phiên bản đầu tiên

Phiên bản đầu chỉ cần 4 việc:
1. Hiển thị danh sách món ăn mẫu.
2. Bấm nút lọc theo loại món (Món nước, Cơm, Bún...).
3. Ô tìm kiếm món theo tên.
4. Xem thông tin cơ bản trên mỗi thẻ món (tên, giá, mô tả, nguyên liệu).

---

## 4. Chi tiết chức năng tìm kiếm (Task sẽ giao cho AI)

### Cách người dùng thao tác:
- Người dùng gõ từ khóa vào ô tìm kiếm (ví dụ: "phở", "cơm", "gà").
- Kết quả lọc ngay khi gõ hoặc khi bấm nút "Tìm kiếm".

### Logic tìm kiếm:
- Tìm theo tên món ăn (`ten`).
- Không phân biệt chữ hoa hay chữ thường (gõ "pho" hay "Phở" đều tìm được).
- Hỗ trợ tiếng Việt có dấu.
- Nếu ô tìm kiếm để trống: hiển thị lại toàn bộ món theo danh mục đang chọn.

### Kết hợp với bộ lọc loại món:
- Tìm kiếm phải đi cùng với bộ lọc loại món đang chọn.
- *Ví dụ:* Nếu đang bấm chọn loại "Món nước" mà gõ "bò", hệ thống chỉ hiện các món nước có chữ "bò" (Phở bò, Bún bò Huế). Không hiện món xào hay món nướng.

### Khi không tìm thấy món nào:
- Ẩn danh sách món.
- Hiện dòng thông báo: *"Không tìm thấy món ăn nào phù hợp với bộ lọc hiện tại."*
- Cập nhật số lượng: *"Đang hiển thị: 0 món ăn"*.

---

## 5. Những gì KHÔNG làm (Ngoài phạm vi)

Ghi rõ để AI không tự ý viết thêm:
- Không làm đăng nhập / đăng ký tài khoản.
- Không làm giỏ hàng hay đặt món online.
- Không tích hợp thanh toán.
- Không làm đánh giá sao hay bình luận.
- Không làm trang quản trị (Admin).
- Không viết backend, không kết nối cơ sở dữ liệu.
- Không gọi API AI trong code web.
