import ProductList, { Product } from "./ProductList";

const productsData: Product[] = [
  { id: 1, title: "Смартфон X", description: "Мощный процессор и отличная камера.", price: 59990, category: "Электроника", inStock: true },
  { id: 2, title: "Наушники Pro", description: "Беспроводные, шумоподавление.", price: 14990, category: "Аудио", inStock: true },
  { id: 3, title: "Ноутбук Z", description: "16 ГБ ОЗУ, 512 ГБ SSD.", price: 89990, category: "Компьютеры", inStock: false },
  { id: 4, title: "Клавиатура Mech", description: "Механическая, RGB подсветка.", price: 8990, category: "Аксессуары", inStock: true },
  { id: 5, title: "Мышь Gamer", description: "Высокая точность сенсора.", price: 4990, category: "Аксессуары", inStock: true },
  { id: 6, title: "Монитор 27\"", description: "4K разрешение, IPS матрица.", price: 34990, category: "Электроника", inStock: true },
  { id: 7, title: "Умные часы", description: "Отслеживание пульса и сна.", price: 19990, category: "Гаджеты", inStock: false },
  { id: 8, title: "Колонка Boom", description: "Громкий звук, защита от воды.", price: 7990, category: "Аудио", inStock: true },
  { id: 9, title: "Планшет Tab", description: "10 дюймов, идеально для чтения.", price: 29990, category: "Электроника", inStock: true },
  { id: 10, title: "Веб-камера HD", description: "1080p, встроенный микрофон.", price: 3990, category: "Аксессуары", inStock: true },
  { id: 11, title: "Микрофон Studio", description: "Для стримов и записи.", price: 12990, category: "Аудио", inStock: false },
  { id: 12, title: "Кресло Comfort", description: "Эргономичное, с поддержкой спины.", price: 24990, category: "Мебель", inStock: true },
];

export default function CatalogPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 px-6">
        <h1 className="text-3xl font-bold tracking-tight">Каталог товаров</h1>
        <p className="text-muted-foreground mt-2">Выберите то, что вам по душе</p>
      </div>
      <ProductList products={productsData} />
    </div>
  );
}