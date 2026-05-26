import 'dotenv/config';
import { PrismaClient, Role } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({
  adapter,
});

const seedUsers = async () => {
  try {
    const count = await prisma.user.count();
    if (count === 0) {
      await prisma.user.createMany({
        data: [
          { email: 'user1@gamil.com', password: '[PASSWORD]', name: 'User 1', role: 'STUDENT' },
          { email: 'user2@gamil.com', password: '[PASSWORD]', name: 'User 2', role: 'PARENT' },
          { email: 'user3@gamil.com', password: '[PASSWORD]', name: 'User 3', role: 'EDUCATOR' },
        ],
      });
      console.log('Database seeded successfully!');
    } else {
      console.log('Database already seeded.');
    }
  } catch (error) {
    console.error('Failed to seed database:', error);
  }
};

// Run seed if needed
seedUsers();

export async function getUsers(){
  return prisma.user.findMany();
}

export async function getUser(id : string){
  return prisma.user.findUnique({
    where: {id}
  })
}

export async function createUser(email: string, password: string, name: string, role: Role){
  return prisma.user.create({
    data: {
      email,
      password,
      name,
      role
    }
  })
}

export async function updateUser(id: string, email: string, password: string, name: string, role: Role){
  return prisma.user.update({
    where: {id},
    data: {
      email,
      password,
      name,
      role
    }
  })
}

export async function deleteUser(id: string){
  return prisma.user.delete({
    where: {id}
  })
}