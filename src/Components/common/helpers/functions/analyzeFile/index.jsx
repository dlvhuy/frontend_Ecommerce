const isValidFileType = (file) => {
    
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    return allowedTypes.includes(file.type);
};

// Helper Function: Kiểm tra kích thước file
const isValidFileSize = (file) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    return file.size <= maxSize;
};

export {isValidFileType,isValidFileSize}    