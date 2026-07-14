// character.tsx

interface CharacterProps {
    character: string;
    // status đã được thay thế bằng typedCharacter để xử lý logic gõ đúng/sai
    typedCharacter: string | undefined;
}

export default function Character({ character, typedCharacter }: CharacterProps) {
    let color = "text-gray-400 dark:text-gray-500"; // Màu mặc định cho chữ chưa gõ (pending)

    if (typedCharacter !== undefined) {
        // Kiểm tra ký tự đã gõ có trùng khớp với ký tự gốc hay không
        color = typedCharacter === character
            ? "text-black dark:text-white font-medium" // Gõ đúng: Chữ đen (màu mặc định trên nền sáng) hoặc trắng (màu mặc định trên nền tối)
            : "text-red-500 bg-red-100/50 dark:bg-red-950/30 rounded-[2px]"; // Gõ sai: Chữ đỏ, thêm nền đỏ nhẹ để làm nổi bật lỗi sai
    }

    return (
        <span className={`transition-colors duration-100 ${color}`}>
            {character}
        </span>
    );
}

// Giữ nguyên component Cursor như đã tối ưu ở bước trước
export function Cursor() {
    return (
        <span
            className="
                absolute 
                -left-[1px] 
                top-[10%] 
                h-[80%] 
                w-[2px] 
                animate-pulse 
                bg-indigo-600 
                dark:bg-indigo-400
            "
        />
    );
}