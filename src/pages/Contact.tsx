import { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { Combobox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Button from '../components/Button';
import Input from '../components/Input';
import { UnfoldIcon } from '../components/Icons';
import { motion } from 'framer-motion';

const GET_PETS_QUERY = gql`
  query Pets {
    pets {
      id
      name
      location
    }
  }
`;

const GET_PET_BY_ID_QUERY = gql`
  query Pet($id: ID) {
    pet(where: { id: $id }) {
      name
    }
  }
`;

interface GetPetsQueryResponse {
  pets: [
    pet: {
      id: string;
      name: string;
      location: string;
    },
  ];
}

interface GetPetByIDQueryResponse {
  pet: {
    name: string;
  };
}

interface SelectedPet {
  id: string;
  name: string;
}

export default function Contact() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const id = searchParams.get('id');

  // const [getPets, setGetPets] = useState(!id);
  const [pets, setPets] = useState<GetPetsQueryResponse['pets'] | undefined>();
  const [selectedPet, setSelectedPet] = useState<SelectedPet>(
    {} as SelectedPet,
  );

  const [
    loadPetById,
    { called: calledPetById, loading: loadingPetById, data: petByIdData },
  ] = useLazyQuery<GetPetByIDQueryResponse>(GET_PET_BY_ID_QUERY, {
    variables: {
      id,
    },
  });

  const [
    loadPets,
    { called: calledPets, loading: loadingPets, data: petsData },
  ] = useLazyQuery<GetPetsQueryResponse>(GET_PETS_QUERY);

  const [petNameQuery, setPetNameQuery] = useState<string>('');

  const loadingView = (
    <div className="flex-auto grid place-items-center">Carregando...</div>
  );

  useEffect(() => {
    if (id) {
      loadPetById();
      if (loadingPetById || !petByIdData || selectedPet.name) return;
      setSelectedPet({ id, name: petByIdData.pet.name });
    } else {
      loadPets();
      if (loadingPets || !petsData) return;
      setPets(petsData.pets);
    }
  }, [id, petByIdData, petsData]);

  useEffect(() => {
    if (petNameQuery.length > 1 && !calledPets) loadPets();
    if (loadingPets || !petsData) return;
    setPets(petsData.pets);
  }, [petNameQuery, petsData]);

  if ((calledPetById && !petByIdData) || (!id && calledPets && loadingPets))
    return loadingView;

  const filteredPets =
    petNameQuery === ''
      ? pets
      : pets?.filter((pet) => {
          return pet.name.toLowerCase().includes(petNameQuery.toLowerCase());
        });

  return (
    <main className="flex-auto m-header mb-4 md:mb-[91px] xl:mb-8 px-6 md:px-[122px] xl:px-[444px] flex flex-col items-center">
      <h1 className="md:text-lg text-brand-primary text-center max-w-[226px] md:max-w-full xl:max-w-[90%]">
        Envie uma mensagem para a pessoa ou instituição que está cuidando do
        animal:
      </h1>

      <form className="w-full px-4 py-8 xl:px-[30px] mt-6 md:mt-10 rounded-[10px] grid gap-8 place-items-center bg-brand-gray-50">
        <div className="w-full grid gap-4">
          <Input
            label="Nome"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira seu nome completo"
            required
          />
          <Input
            type="tel"
            label="Telefone"
            height="lg"
            backgroundColor="white"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Insira seu telefone e/ou whatsapp"
            required
          />
          <Combobox
            as="div"
            className="flex flex-col gap-2 items-start relative"
            value={selectedPet}
            onChange={setSelectedPet}
          >
            {({ open }) => (
              <>
                <Combobox.Label className="text-base md:text-lg xl:font-semibold text-brand-primary">
                  Nome do animal
                </Combobox.Label>
                <Combobox.Input
                  className={classNames(
                    'h-12 w-full bg-white rounded-md shadow-sm placeholder:text-xs md:placeholder:text-sm',
                    'xl:placeholder:text-base placeholder:text-brand-gray-300 focus:ring-2',
                    'focus:ring-brand-primary ring-offset-2 outline-none disabled:text-brand-gray-500',
                    'p-2 xl:p-3 ignore-onclick-outside',
                  )}
                  placeholder="Por qual animal você se interessou?"
                  value={petNameQuery}
                  displayValue={(pet: SelectedPet) => pet.name}
                  onChange={(e) => setPetNameQuery(e.target.value)}
                />
                <Combobox.Button
                  className="w-10 h-12 grid place-content-center absolute right-0 top-8 md:top-9"
                  // onClick={() => loadPets()}
                >
                  <UnfoldIcon
                    className="w-3"
                    isOpen={open}
                    aria-label="Expandir pets disponíveis"
                  />
                </Combobox.Button>
                <Transition
                  show={open}
                  className="w-full absolute z-10"
                  enter="transition-all duration-300"
                  enterFrom="opacity-0 rotate-x-40"
                  enterTo="opacity-100 rotate-x-0"
                  leave="transition-all duration-200"
                  leaveFrom="opacity-100 rotate-x-0"
                  leaveTo="opacity-0 rotate-x-40"
                >
                  <Combobox.Options static as={Fragment}>
                    <ul
                      className={classNames(
                        'w-full py-2 rounded-md absolute top-[88px] md:top-24 z-10 bg-white shadow-md transition-[height]',
                      )}
                      style={{
                        height:
                          filteredPets && filteredPets.length > 0
                            ? 40 * filteredPets.length + 16
                            : 40,
                      }}
                    >
                      {filteredPets && filteredPets.length >= 1 ? (
                        filteredPets.map((pet, i) => (
                          <Combobox.Option
                            key={pet.id}
                            as={Fragment}
                            value={pet}
                          >
                            {({ active, selected }) => (
                              <motion.li
                                initial={{ opacity: 0, translateY: -50 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{ delay: 0.03 * i }}
                              >
                                <div
                                  className={classNames(
                                    'px-4 py-2 text-base group hover:bg-brand-gray-50 cursor-pointer',
                                    'transition-colors flex justify-between items-center',
                                    {
                                      'hover:text-zinc-900 text-brand-gray-500':
                                        !active && !selected,
                                      'bg-brand-gray-50 text-zinc-900': active,
                                      'text-brand-secondary': selected,
                                    },
                                  )}
                                >
                                  <span>{pet.name}</span>
                                  <span className="text-sm text-brand-gray-300 group-hover:text-zinc-900 transition-colors">
                                    {pet.location}
                                  </span>
                                </div>
                              </motion.li>
                            )}
                          </Combobox.Option>
                        ))
                      ) : (
                        <span className="px-4 py-1 md:px-4 md:py-2 text-base text-brand-gray-500">
                          Não encontramos nenhum pet com esse nome
                        </span>
                      )}
                    </ul>
                  </Combobox.Options>
                </Transition>
              </>
            )}
          </Combobox>
          <Input
            as="textarea"
            backgroundColor="white"
            label="Mensagem"
            labelPosition="start"
            labelColor="brand-primary"
            placeholder="Escreva sua mensagem."
            required
          />
        </div>
        <Button size="md" text="Enviar" />
      </form>
    </main>
  );
}
