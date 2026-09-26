# QUY TẮC KHI LÀM VIỆC VỚI AI

Khi giao việc cho AI trong project này, AI phải tuân thủ các quy tắc sau:

---

### Quy tắc 1: Không tự ý mở rộng phạm vi
- Chỉ làm đúng việc được giao trong prompt.
- Không tự ý thêm tính năng ngoài lề như giỏ hàng, đăng nhập, chế độ ban đêm hay chức năng gợi ý ngẫu nhiên nếu không được yêu cầu.

### Quy tắc 2: Không tự ý cài thư viện mới
- Dự án chỉ dùng HTML, CSS và JavaScript thuần.
- Không tự cài thêm thư viện (React, Vue, Tailwind, jQuery, Lodash...) hoặc chèn link CDN bên ngoài.

### Quy tắc 3: Không sửa các phần không liên quan
- Cần làm chức năng nào thì sửa đúng chỗ đó.
- Không tự tiện sửa lại cấu trúc code (refactor) hay đổi tên các biến/hàm đang chạy ổn định.

### Quy tắc 4: Giữ nguyên cấu trúc project
- Giữ đúng các file hiện có: `index.html`, `style.css`, `app.js`, `data/mon-an.js`.
- Không tự tạo thêm thư mục hay tách file nhỏ ra nếu không được yêu cầu.

### Quy tắc 5: Không tự ý sửa dữ liệu mẫu
- Dữ liệu món ăn nằm ở file `data/mon-an.js`.
- Không tự xóa món, đổi tên món, đổi giá tiền hay sửa cấu trúc dữ liệu nếu chưa có yêu cầu.

### Quy tắc 6: Kiểm tra lại sau khi sửa
- Viết hoặc sửa code xong phải tự rà soát: code có lỗi cú pháp không, có làm hỏng tính năng lọc danh mục đang có không.

### Quy tắc 7: Nếu yêu cầu chưa rõ, hãy hỏi lại
- Khi gặp yêu cầu mơ hồ hoặc có nhiều cách hiểu, không được tự đoán để code bừa.
- Phải chỉ ra điểm chưa rõ và hỏi lại người hướng dẫn trước khi làm.

### Quy tắc 8: Báo cáo lại những gì đã sửa
- Sau khi code xong, phải tóm tắt ngắn gọn:
  1. Đã sửa những file nào?
  2. Đã thêm hoặc đổi những đoạn logic nào?
  3. Cần kiểm tra (test) như thế nào trên trình duyệt?
