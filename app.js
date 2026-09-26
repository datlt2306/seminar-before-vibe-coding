/**
 * ==========================================================================
 * FILE: app.js
 * DỰ ÁN: Hôm Nay Ăn Gì?
 * TRẠNG THÁI: Ban đầu (Trước khi giao việc cho AI)
 * ==========================================================================
 * Chức năng hiện tại:
 * 1. Hiển thị danh sách món ăn ra giao diện từ mảng DANH_SACH_MON_AN.
 * 2. Lọc món ăn theo danh mục phân loại (Tất cả, Món nước, Cơm,...).
 * 3. Hiển thị số lượng món tương ứng với kết quả lọc.
 * 
 * CHÚ Ý CHO LIVE DEMO:
 * - Chức năng "Tìm kiếm món ăn" CHƯA được hiện thực ở đây.
 * - Đây là TASK chính để giảng viên demo quy trình giao việc cho AI.
 */

// Định dạng số tiền sang định dạng Việt Nam Đồng (VND)
function formatTien(soTien) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(soTien);
}

// Lấy các phần tử DOM cần thao tác
const foodListElement = document.getElementById("foodList");
const emptyMessageElement = document.getElementById("emptyMessage");
const resultCountElement = document.getElementById("resultCount");
const filterButtons = document.querySelectorAll(".filter-btn");

// Biến lưu trạng thái danh mục đang chọn hiện tại
let danhMucHienTai = "tat-ca";

/**
 * Hàm hiển thị danh sách các món ăn lên giao diện HTML
 * @param {Array} danhSach - Mảng các đối tượng món ăn
 */
function hienThiDanhSach(danhSach) {
  // Xóa nội dung cũ trong grid
  foodListElement.innerHTML = "";

  // Cập nhật số lượng món
  resultCountElement.textContent = `Đang hiển thị: ${danhSach.length} món ăn`;

  // Kiểm tra nếu danh sách trống
  if (danhSach.length === 0) {
    emptyMessageElement.classList.remove("hidden");
    return;
  }

  emptyMessageElement.classList.add("hidden");

  // Duyệt qua từng món ăn và tạo card HTML
  danhSach.forEach((mon) => {
    const card = document.createElement("article");
    card.className = "food-card";

    // Chuỗi nguyên liệu hiển thị
    const nguyenLieuText = mon.nguyenLieu ? mon.nguyenLieu.join(", ") : "Chưa cập nhật";

    card.innerHTML = `
      <div>
        <div class="food-card-header">
          <h2 class="food-name">${mon.ten}</h2>
          <span class="food-tag">${mon.loai}</span>
        </div>
        <div class="food-price">${formatTien(mon.gia)}</div>
        <p class="food-desc">${mon.moTa}</p>
      </div>
      <div class="food-ingredients">
        <span class="ingredients-title">Nguyên liệu chính:</span>
        <span>${nguyenLieuText}</span>
      </div>
    `;

    foodListElement.appendChild(card);
  });
}

/**
 * Hàm lọc món ăn theo loại
 * @param {string} loaiChon - Tên loại món được chọn
 */
function locTheoLoai(loaiChon) {
  danhMucHienTai = loaiChon;

  if (loaiChon === "tat-ca") {
    hienThiDanhSach(DANH_SACH_MON_AN);
  } else {
    const ketQuaLoc = DANH_SACH_MON_AN.filter((mon) => mon.loai === loaiChon);
    hienThiDanhSach(ketQuaLoc);
  }
}

/**
 * Gắn sự kiện click cho các nút lọc danh mục
 */
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Cập nhật trạng thái active cho nút được bấm
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const category = button.getAttribute("data-category");
    locTheoLoai(category);
  });
});

/* ==========================================================================
 * TODO CHO BUỔI DEMO (AI SẼ THỰC HIỆN BƯỚC NÀY):
 * - Bắt sự kiện người dùng nhập vào #searchInput hoặc click #searchBtn
 * - Lọc danh sách món ăn theo từ khóa tìm kiếm (theo tên món)
 * - Kết hợp điều kiện tìm kiếm cùng với bộ lọc danh mục đang chọn
 * ========================================================================== */

// Khởi chạy khi trang vừa tải xong
document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra dữ liệu món ăn đã nạp thành công chưa
  if (typeof DANH_SACH_MON_AN !== "undefined" && Array.isArray(DANH_SACH_MON_AN)) {
    hienThiDanhSach(DANH_SACH_MON_AN);
  } else {
    console.error("Không tìm thấy dữ liệu DANH_SACH_MON_AN từ data/mon-an.js");
    emptyMessageElement.classList.remove("hidden");
    emptyMessageElement.querySelector(".empty-text").textContent = "Lỗi nạp dữ liệu món ăn!";
  }
});
