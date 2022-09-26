import { Injectable, NotFoundException } from '@nestjs/common';
import { generateID } from '../utils/generate-id';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  users = [
    {
      id: 1,
      first_name: 'Julian',
      last_name: 'Sanders',
      email: 'julian_sanders@hotmail.com',
    },
    {
      id: 2,
      first_name: 'Lauren',
      last_name: 'Martin',
      email: 'lauren_martin@outlook.com',
    },
    {
      id: 3,
      first_name: 'Aaron',
      last_name: 'Barnes',
      email: 'a_m_barnes@outlook.com',
    },
    {
      id: 4,
      first_name: 'Andrew',
      last_name: 'Russell',
      email: 'arussell@aol.com',
    },
    {
      id: 5,
      first_name: 'Sean',
      last_name: 'Brown',
      email: 'sean_brown70@outlook.com',
    },
    {
      id: 6,
      first_name: 'Sofia',
      last_name: 'Price',
      email: 'sofia.price@rocketmail.com',
    },
    {
      id: 7,
      first_name: 'Stephen',
      last_name: 'Bryant',
      email: 'stephenbryant47@ymail.com',
    },
    {
      id: 8,
      first_name: 'Natalie',
      last_name: 'Baker',
      email: 'n.baker@gmail.com',
    },
    {
      id: 9,
      first_name: 'David',
      last_name: 'Jenkins',
      email: 'd.a@outlook.com',
    },
    {
      id: 10,
      first_name: 'Claire',
      last_name: 'Adams',
      email: 'claire_m_adams@gmail.com',
    },
  ];

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: generateID(this.users),
      ...createUserDto,
    };

    this.users = [...this.users, newUser];
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(({ id: userId }) => userId === id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado!');
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const filteredUsers = this.users.filter(
      ({ id: userId }) => userId !== user.id,
    );
    const updatedUser = { ...user, ...updateUserDto };

    this.users = [...filteredUsers, updatedUser].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }

      return 0;
    });

    return updatedUser;
  }

  remove(id: number) {
    this.users = this.users.filter(({ id: userId }) => userId !== id);

    return `Usuário #${id} removido com sucesso.`;
  }
}
