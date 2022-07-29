import { Link, useNavigate } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { gql, useMutation } from '@apollo/client';
import { HomeIcon, MailIcon, UserIcon } from '../Icons';
import { useAuth } from '../contexts/auth';
import Popover from './Popover';
import Button from '../Button';
import Logo from '../Logo';

const LOGOUT_MUTATION = gql`
  mutation Logout($username: String) {
    logout(username: $username)
  }
`;

export default function Header() {
  const { user, signed, signOut } = useAuth();
  const navigate = useNavigate();

  const [logout, { error }] = useMutation(LOGOUT_MUTATION, {
    onCompleted: () => {
      if (error) return;
      navigate('/');
      signOut();
    },
  });

  return (
    <header className="w-screen max-w-full h-10 mt-12 md:mt-16 md:pl-12 xl:pl-40 flex flex-initial items-center text-white">
      <Popover skip label="Voltar à página inicial" to="/">
        <Logo variant="cream" className="hidden md:block w-32" />
      </Popover>

      <div className="ml-12 flex gap-14 md:gap-16 xl:gap-8">
        <Popover label="Ver pets disponíveis para adoção" to="/pets">
          <HomeIcon className="h-[23px]" aria-label="Pets" />
        </Popover>

        <Popover label="Ver mensagens" to="#">
          <MailIcon className="h-[23px]" aria-label="Mensagens" />
        </Popover>
      </div>
      {signed && (
        <Menu>
          <div className="relative flex-1 mr-10 xl:mr-44 grid place-items-end">
            <Menu.Button>
              {user.picture ? (
                <img
                  className="rounded-full w-10 aspect-square"
                  src={user.picture as string}
                  alt="Foto de perfil"
                />
              ) : (
                <UserIcon className="w-10" aria-label="Ícone do usuário" />
              )}
            </Menu.Button>
            <Menu.Items className="absolute top-11 w-max rounded shadow-lg bg-white text-brand-gray-500 text-base flex flex-col items-center gap-1 p-2">
              <Menu.Item>
                <Link
                  to="/perfil"
                  className="w-full h-7 hover:text-brand-primary transition-colors grid place-items-center"
                >
                  Perfil
                </Link>
              </Menu.Item>
              {/* <hr className="w-full border-brand-gray-500 opacity-50" /> */}
              <Menu.Item>
                <Button
                  onClick={() =>
                    logout({
                      variables: {
                        username: user.username,
                      },
                    })
                  }
                  size="sm"
                  text="Sair"
                />
              </Menu.Item>
            </Menu.Items>
          </div>
        </Menu>
      )}
    </header>
  );
}
