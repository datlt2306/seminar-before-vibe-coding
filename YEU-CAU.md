# YÊU CẦU DỰ ÁN: HÔM NAY ĂN GÌ?

Tài liệu này ghi lại yêu cầu cụ thể của project để Developer và AI cùng đọc và hiểu giống nhau trước khi viết code.

---

## 1. Bài toán

Nhiều người mất từ 15-30 phút mỗi ngày chỉ để nghĩ xem trưa nay hoặc tối nay ăn gì.

Ứng dụng này giúp người dùng chọn món nhanh trong vòng 30 giây:
- Xem các món quen thuộc kèm giá và nguyên liệu.
- Bấm lọc nhanh theo sở thích (món nước, cơm, món nướng...).
- Gõ từ khóa tìm kiếm theo tên hoặc nguyên liệu.
- Bấm nút chọn ngẫu nhiên một món khi quá lười suy nghĩ.
- Lọc theo khoảng giá phù hợp với túi tiền trong ngày.

---

## 2. Người dùng

- **Sinh viên:** Muốn tìm món nhanh, giá bình dân (dưới 50.000đ).
- **Người đi làm:** Muốn đổi món trưa, xem rõ giá và thành phần.

---

## 3. Mục tiêu phiên bản đầu tiên (MVP)

Phiên bản đầu gồm 4 việc cơ bản:
1. Hiển thị danh sách 10 món ăn mẫu từ dữ liệu local.
2. Bấm nút lọc theo loại món (Món nước, Cơm, Bún...).
3. Ô tìm kiếm món theo tên.
4. Xem thông tin cơ bản trên mỗi thẻ món (tên, giá, mô tả, nguyên liệu).

---

## 4. Đặc tả chi tiết các task sẽ giao cho AI (Live Demo)

### Task 1: Tìm kiếm món ăn theo tên (Task cốt lõi)
- **Thao tác:** Người dùng gõ từ khóa vào ô `#searchInput` và có thể bấm `#searchBtn`.
- **Logic:** Tìm theo tên món (`ten`), không phân biệt hoa/thường, hỗ trợ tiếng Việt có dấu.
- **Kết hợp bộ lọc:** Phải đi cùng với bộ lọc loại món đang chọn (ví dụ: đang chọn "Cơm" mà gõ "gà" thì chỉ hiện Cơm gà).
- **Khi không có kết quả:** Hiện dòng thông báo: *"Không tìm thấy món ăn nào phù hợp với bộ lọc hiện tại."*

### Task 2: Mở rộng tìm kiếm theo nguyên liệu (Yêu cầu thay đổi)
- **Bối cảnh:** Người dùng phản hồi là nhiều khi chỉ nhớ muốn ăn "thịt bò" hay "tôm" chứ không nhớ tên món.
- **Yêu cầu:** Mở rộng hàm tìm kiếm để kiểm tra cả trong mảng `nguyenLieu` của từng món.
- **Giao diện:** Sửa lại placeholder thành: *"Nhập tên món hoặc nguyên liệu (VD: thịt bò, tôm)..."*.

### Task 3: Tính năng "Chọn hộ tôi 1 món!" (Gợi ý ngẫu nhiên)
- **Thao tác:** Thêm một nút bấm nổi bật cạnh ô tìm kiếm: **"🎲 Chọn hộ tôi 1 món!"** (`#randomBtn`).
- **Logic:** Lấy ngẫu nhiên 1 món từ danh sách các món **đang hiển thị** sau khi đã lọc.
- **Hiển thị:** Làm nổi bật thẻ món ăn được chọn (cuộn màn hình tới món đó và thêm viền nổi bật/hiệu ứng nhấp nháy nhẹ) hoặc hiện hộp thông báo popup đơn giản (dùng HTML/CSS thuần, tuyệt đối không dùng thư viện ngoài).

### Task 4: Lọc món theo khoảng giá (Budget Filter)
- **Thao tác:** Thêm bộ nút lọc theo mức giá:
  - Tất cả mức giá
  - Dưới 30.000đ (tiết kiệm)
  - 30.000đ – 45.000đ (phổ thông)
  - Trên 45.000đ (sang xịn)
- **Logic:** Lọc mảng theo thuộc tính `gia`, phải kết hợp mượt mà với cả bộ lọc loại món và ô tìm kiếm.

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
