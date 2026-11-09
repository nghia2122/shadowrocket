const version = 'V1.0.3';

// Hàm đặt giá trị header
function setHeaderValue(headers, key, value) {
    const lowerKey = key.toLowerCase();
    if (lowerKey in headers) {
        headers[lowerKey] = value;
    } else {
        headers[key] = value;
    }
}

// Lấy danh sách header từ request
var modifiedHeaders = $request.headers;

// Danh sách các header cần xóa/cập nhật
const headersToModify = {
    "X-RevenueCat-ETag": "",
    "If-None-Match": "",
    "Cache-Control": "no-cache",
    "Pragma": "no-cache"
};

// Áp dụng thay đổi cho từng header trong danh sách
for (let key in headersToModify) {
    setHeaderValue(modifiedHeaders, key, headersToModify[key]);
}

// Ghi log để kiểm tra header đã bị sửa
console.log("🛠 Modified Headers:", JSON.stringify(modifiedHeaders, null, 2));

// Trả về request với headers đã chỉnh sửa
$done({ headers: modifiedHeaders });