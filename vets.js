const fs = require('fs');
const path = require('path');

function convertFilesToJSX(directoryPath) {
  // Đọc danh sách các file và thư mục trong thư mục hiện tại
  fs.readdir(directoryPath, (err, items) => {
    if (err) {
      console.error('Lỗi khi đọc thư mục:', err);
      return;
    }

    // Lặp qua từng item trong thư mục
    items.forEach(item => {
      // Lấy đường dẫn tới item
      const itemPath = path.join(directoryPath, item);

      // Kiểm tra nếu item là thư mục
      fs.stat(itemPath, (err, stats) => {
        if (err) {
          console.error('Lỗi khi kiểm tra item:', err);
          return;
        }

        if (stats.isDirectory()) {
          // Đệ quy chuyển đổi trong thư mục con
          convertFilesToJSX(itemPath);
        } else if (stats.isFile() && path.extname(itemPath) === '.jsx') {
          // Nếu item là file .js, đổi tên thành .jsx
          const newFilePath = path.join(directoryPath, path.basename(itemPath, '.jsx') + '.tsx');
          fs.rename(itemPath, newFilePath, err => {
            if (err) {
              console.error('Lỗi khi đổi tên file:', err);
            } else {
              console.log(`Đã đổi tên "${item}" thành "${path.basename(newFilePath)}".`);
            }
          });
        }
      });
    });
  });
}

// Gọi hàm với đường dẫn tới thư mục chứa các file .js cần chuyển đổi
const directoryPath = '/Users/totha/React_Native/Convert/digibird-ui-ts/src/components';
convertFilesToJSX(directoryPath);