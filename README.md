# BÀI TẬP CHO MVC API BẰNG NODEJS

## NOTE:

    Công nghệ/Thư viện được sử dụng: NodeJS/Express/Sequelize/Mysql

    Em sử dụng Database được cấp ở bài SQL trước đó để tiết kiệm thời gian.

    Vì RESTful API là Stateless không lữu dữ liệu ở local như console.log và GUI nên em xin phép được tạo thêm 1 bảng CartItems để chữa dữ liệu giỏ hàng của người dùng

    Dữ liệu nằm ở trong file "Database.sql"

## CÁC PHƯƠNG THỨC API:

    *HIỂN THỊ DANH SÁCH TẤT CẢ USER TRONG HỆ THỐNG:

        URL: GET http://localhost:8080/api/v1/users

    *DANH SÁCH ORDERS (BAO GỒM ODER DETAIL) THEO USER:

        URL: GET http://localhost:8080/api/v1/orders/[id]

        Tham số:
        [id]: UserID

    *CHỨC NĂNG GIỎ HÀNG (THÊM) SẢN PHẨM:

        URL: POST http://localhost:8080/api/v1/cartitems

        Tham số:
        File Json chứa sản phẩm cần thêm:
         VD: {
               "ProductName": "Iphone X",
               "Price": 1000,
               "CategoryID": 1
            }

    *CHỨC NĂNG GIỎ HÀNG (XOÁ) SẢN PHẨM:

        URL: DELETE http://localhost:8080/api/v1/cartitems/[id]

        Tham số:
        [id]: UserID


    *THANH TOÁN (GHI NHẬN ĐƠN VÀO DATABASE)

        URL: POST http://localhost:8080/api/v1/cart/[userId]/checkout

        Tham số:
        [id]: UserID
