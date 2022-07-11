import { gql, useQuery } from '@apollo/client';
import Pet from '../components/Pet';

const GET_PETS_QUERY = gql`
  query Pets {
    pets {
      id
      name
      description
      location
      image {
        url
      }
    }
  }
`;

interface GetPetsQueryResponse {
  pets: [
    pet: {
      id: string;
      name: string;
      description: {
        age: string;
        size: string;
        behaviour: string;
      };
      location: string;
      image: {
        url: string;
      };
    },
  ];
}

export default function Pets() {
  const { data } = useQuery<GetPetsQueryResponse>(GET_PETS_QUERY);

  return (
    <main className="flex-auto flex flex-col m-header md:pb-8 xl:pb-[60px] container">
      <h1 className="mx-auto mb-8 xl:mb-10 max-w-[226px] md:max-w-[373px] xl:max-w-full text-brand-primary text-center md:text-lg">
        Olá! Veja os amigos disponíveis para adoção!
      </h1>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data?.pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            image={pet.image.url}
            description={pet.description}
            location={pet.location}
          />
        ))}
      </section>
    </main>
  );
}
