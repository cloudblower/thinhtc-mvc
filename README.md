## Danh Sách Method API

1. HIỂN THỊ TẤT CẢ DANH SÁCH USER CÓ TRONG HỆ THỐNG  
   GET - http://localhost:8080/users
2. DANH SÁCH ORDER THEO USER ID  
   GET - http://localhost:8080/orders?UserID=[UserID]
3. THÊM XOÁ GIỎ HÀNG  
   POST - http://localhost:8080/orders # Dùng JSON  
   DELETE - http://localhost:8080/orders?OrderID=[OrderID]
4. THANH TOÁN ĐƠN HÀNG
   PATCH - http://localhost:8080/orders?OrderID=[OrderID]

## Note:

Vì Restful API là stateless không lưu dữ liệu ở local được như console.log và GUI nên em xin phép được dùng bảng orders để thay thế carts làm nơi lưu trữ giỏ hàng. Ban đầu record được lưu vào orders với trường OrderDate bị bỏ trống sẽ được tính như chưa được thanh toán. Cho OrderDate được cập nhật thì order mới chính thức được ghi nhận.
