/**
 * Dữ liệu danh sách món ăn mẫu cho ứng dụng "Hôm Nay Ăn Gì?"
 * Sử dụng cấu trúc JavaScript thuần, không cần cơ sở dữ liệu bên ngoài.
 */

const DANH_SACH_MON_AN = [
  {
    id: 1,
    ten: "Phở bò truyền thống",
    loai: "Món nước",
    gia: 45000,
    moTa: "Phở bò nước dùng hầm xương đậm đà, thơm mùi quế hồi thảo quả, kèm thịt bò tươi mềm.",
    nguyenLieu: ["bánh phở", "thịt bò", "xương bò", "hành lá", "quế", "hồi"]
  },
  {
    id: 2,
    ten: "Cơm gà Hội An",
    loai: "Cơm",
    gia: 40000,
    moTa: "Cơm nấu nước luộc gà vàng ươm, thịt gà ta xé phay bóp rau răm chua ngọt hấp dẫn.",
    nguyenLieu: ["gạo tẻ", "thịt gà", "rau răm", "hành tây", "nghệ"]
  },
  {
    id: 3,
    ten: "Bún chả Hà Nội",
    loai: "Bún",
    gia: 40000,
    moTa: "Chả viên và chả miếng nướng than hoa thơm lừng, chấm nước mắm đu đủ chua ngọt thanh nhẹ.",
    nguyenLieu: ["bún tươi", "thịt lợn", "nước mắm", "đu đủ xanh", "rau sống"]
  },
  {
    id: 4,
    ten: "Bánh mì thịt nướng",
    loai: "Bánh mì / Ăn nhanh",
    gia: 25000,
    moTa: "Vỏ bánh mì giòn rụm kẹp thịt heo nướng sả thơm phức, pate, dưa chuột và đồ chua giòn ngọt.",
    nguyenLieu: ["bánh mì", "thịt heo", "pate", "dưa chuột", "cà rốt chua", "rau mùi"]
  },
  {
    id: 5,
    ten: "Cơm tấm sườn bì chả",
    loai: "Cơm",
    gia: 45000,
    moTa: "Cơm tấm nóng hổi ăn kèm miếng sườn nướng mỡ hành đậm vị, chả trứng bùi bùi và mỡ hành thơm phức.",
    nguyenLieu: ["gạo tấm", "sườn heo", "bì heo", "chả trứng", "mỡ hành", "nước mắm chua ngọt"]
  },
  {
    id: 6,
    ten: "Bún bò Huế",
    loai: "Món nước",
    gia: 50000,
    moTa: "Bún sợi to đặc trưng, nước dùng cay nồng mùi mắm ruốc và sả, ăn cùng nạm bò, chả cua và tiết.",
    nguyenLieu: ["bún sợi to", "bắp bò", "mắm ruốc", "sả", "chả cua", "tiết"]
  },
  {
    id: 7,
    ten: "Mì xào giòn hải sản",
    loai: "Món xào",
    gia: 48000,
    moTa: "Mì trứng chiên phồng giòn rụm rưới sốt hải sản tôm mực và rau củ xào tươi giòn, ngọt thanh.",
    nguyenLieu: ["mì trứng", "tôm", "mực", "cải ngọt", "cà rốt", "nấm rơm"]
  },
  {
    id: 8,
    ten: "Gà nướng mật ong",
    loai: "Món nướng",
    gia: 55000,
    moTa: "Đùi gà ướp gia vị đậm đà quét mật ong rừng nướng vàng ruộm, da giòn thịt ngọt ngào mềm mọng.",
    nguyenLieu: ["thịt gà", "mật ong", "tỏi", "dầu hào", "tiêu đen"]
  },
  {
    id: 9,
    ten: "Hủ tiếu Nam Vang",
    loai: "Món nước",
    gia: 45000,
    moTa: "Nước lèo trong ngọt vị củ cải và mực khô, ăn kèm tôm tươi, thịt nạc, trứng cút và cần tàu.",
    nguyenLieu: ["sợi hủ tiếu", "thịt nạc heo", "tôm", "trứng cút", "gan heo", "cần tàu"]
  },
  {
    id: 10,
    ten: "Gỏi cuốn tôm thịt",
    loai: "Bánh mì / Ăn nhanh",
    gia: 30000,
    moTa: "Món ăn thanh mát cuốn bánh tráng với tôm luộc, thịt ba chỉ, bún tươi và rau thơm, chấm tương đen bơ lạc.",
    nguyenLieu: ["bánh tráng", "tôm", "thịt ba chỉ", "bún tươi", "rau thơm", "tương đen"]
  }
];

// Xuất dữ liệu cho trình duyệt sử dụng
if (typeof module !== "undefined" && module.exports) {
  module.exports = DANH_SACH_MON_AN;
}
