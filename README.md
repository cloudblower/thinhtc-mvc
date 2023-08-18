1. HIỂN THỊ TẤT CẢ DANH SÁCH USER CÓ TRONG HỆ THỐNG
   GET - http://localhost:8080/users
2. DANH SÁCH ORDER THEO USER ID
   GET - http://localhost:8080/orders?UserID=[UserID]
3. THÊM XOÁ GIỎ HÀNG
   POST - http://localhost:8080/orders # Dùng JSON
   DELETE - http://localhost:8080/orders?OrderID=[OrderID]
4. THANH TOÁN ĐƠN HÀNG
   PATCH - http://localhost:8080/orders?OrderID=[OrderID]
