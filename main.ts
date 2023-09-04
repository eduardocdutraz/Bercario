import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const mae = await prisma.mae.create({
    data: {
        id: '1',
        nome: 'Maria',
        endereço: 'Rua A, 123',
        telefone: '123-456-7890',
        dataNascimento: new Date('20-07-2003'),
    },
  });

  const medico = await prisma.medico.create({
    data: {
        Id: '2896',
        crm: '78562',
        nome: 'Dr. Eduardo Dutra',
        telefone: '(27)999856321',
        especialização: 'Ginecologista-obstetrícia',
    },
  });

  const bebe = await prisma.bebe.create({
    data: {
        id: '8562',
        nome: 'Raphael Siqueira',
        dataNascimento: new Date(),
        peso: 2.6,
        altura: 69.5,
        maeId: mae.Id,
        medicoId: medico.Id,
    },
  });

  console.log(`Bebê registrado: ${bebe.nome}`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });