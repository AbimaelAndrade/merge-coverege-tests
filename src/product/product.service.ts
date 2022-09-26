import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  products = [
    {
      id: 1,
      name: 'Kids Gear',
      category: 'Clothing',
      price: 193,
      description:
        'Praesent justo leo, eleifend a molestie vestibulum, bibendum sit amet leo',
    },
    {
      id: 2,
      name: 'First Aid Attachment',
      category: 'Health',
      price: 183.95,
      description: 'Integer pellentesque fringilla libero quis cursus',
    },
    {
      id: 3,
      name: 'Kitchen Component',
      category: 'Home',
      price: 185.99,
      description: 'Integer ut vehicula odio, eget rhoncus tellus',
    },
    {
      id: 4,
      name: 'Aquarium Attachment',
      category: 'Pets',
      price: 197.95,
      description: 'Nulla sit amet maximus lorem.',
    },
    {
      id: 5,
      name: 'Medicine Thingamajig',
      category: 'Health',
      price: 192,
      description: 'Donec ex erat, auctor ac facilisis at, bibendum at nisi',
    },
    {
      id: 6,
      name: 'Mens Accessory',
      category: 'Clothing',
      price: 143,
      description: 'Phasellus vel egestas orci, vel cursus neque',
    },
    {
      id: 7,
      name: 'Music Item',
      category: 'Entertainment',
      price: 59,
      description: 'Nam commodo pulvinar augue vel euismod',
    },
    {
      id: 8,
      name: 'Kids Mechanism',
      category: 'Clothing',
      price: 48.99,
      description: 'Sed tempor ipsum eget enim convallis accumsan',
    },
    {
      id: 9,
      name: 'Music Item',
      category: 'Entertainment',
      price: 18.95,
      description: 'Mauris ac sapien a est dictum volutpat',
    },
    {
      id: 10,
      name: 'Skin Care Tool',
      category: 'Beauty',
      price: 128.99,
      description:
        'Aliquam sagittis ornare neque, sed fermentum nisi cursus ut',
    },
  ];
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return {};
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
