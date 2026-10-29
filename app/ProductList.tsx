'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
        <Card key={product.id} className="flex flex-col shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
            <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <Badge variant={product.inStock ? "default" : "destructive"}>
            {product.inStock ? "В наличии" : "Нет в наличии"}
                </Badge>
            </div>
            <CardDescription>{product.category}</CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground">{product.description}</p>
            </CardContent>
            
            <CardFooter className="flex justify-between items-center border-t pt-4">
            <span className="text-2xl font-bold">{product.price} ₽</span>
            <Button disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-4 w-4" /> В корзину
            </Button>
            </CardFooter>
        </Card>
        ))}
    </div>
    );
}