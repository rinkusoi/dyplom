import re

def update_image_paths_in_file(file_path):
    # Читаємо HTML-файл
    with open(file_path, 'r', encoding='utf-8') as file:
        html = file.read()

    # Оновлюємо шляхи до зображень
    updated_html = re.sub(
        r'<img\s+([^>]*?)src="([^"]+)"',
        lambda match: f'<img {match.group(1)}src="../img/{match.group(2).split("/")[-1]}"',
        html
    )

    # Записуємо назад у файл
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(updated_html)

    print(f"[✔] Зображення у {file_path} оновлені!")

# 🔧 Шлях до файлу
update_image_paths_in_file("pages/projects.html")
