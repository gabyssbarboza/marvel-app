import React, { useState, useEffect } from 'react'
import { ModalAvaliable, ModalContainer, ModalContent, ModalCritica, ModalDescription, ModalImg, ModalInfos, ModalStars, ModalTitle, ModalIcon, ModalClose } from './ModalStyle';
import md5 from 'md5';
import amazon from '../../assets/images/amazon.png';
import americanas from '../../assets/images/americanas.png';

const Modal = ({setModal, modal}) => {

    console.log(modal)


    const [data, setData] = useState();

    const public_key = 'e865e7f2f1ccdad8015919d91419ef5a';
    const private_key = '31b1d4b98b12cd521e887ae6a4babadc10188585';

    const time = Number(new Date());

    const hash = md5(time + private_key + public_key);

    let url;

    const getData= async () => {
        if(window.location.pathname === '/personagens'){
            url = `http://gateway.marvel.com/v1/public/characters/${modal}?ts=${time}&apikey=${public_key}&hash=${hash}`;
        }else if(window.location.pathname === '/filmes'){
            url = `http://gateway.marvel.com/v1/public/series/${modal}?ts=${time}&apikey=${public_key}&hash=${hash}`;
        }else{
            url = `http://gateway.marvel.com/v1/public/comics/${modal}?ts=${time}&apikey=${public_key}&hash=${hash}`;
        }
        let response = await fetch(url);
        let body = await response.json();
        setData(body.data.results)
        console.log(body.data.results)
    };

    useEffect(() => {
        getData();
    }, [modal]);

    if(data)
    return (
        <ModalContainer setModal={setModal}>
            <ModalContent>
            {data.map((item, index) => (
                <>
                  <ModalImg src={item.thumbnail.path && item.thumbnail.path + '/portrait_uncanny.' + item.thumbnail.extension} />
                  <ModalInfos>
                      <ModalTitle>
                            {item.title}
                      </ModalTitle>
                      <ModalDescription>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ullam fugiat ratione consequuntur laboriosam, tempora error beatae dolores mollitia, eveniet modi voluptates at odio quasi, blanditiis praesentium asperiores nostrum similique.
                      </ModalDescription>
                      <ModalAvaliable>
                          Disponivel para compra:
                       <div>   
                      <ModalIcon src={amazon} />
                      <ModalIcon src={americanas} />
                      </div>
                      </ModalAvaliable>
                      <ModalCritica>
                          Crítica
                       <div> 
                       <div> 
                      <ModalStars />
                      <ModalStars />
                      <ModalStars />
                      <ModalStars />
                      </div>
                      <div>
                          <ModalClose onClick={() => setModal(false)} />
                      </div>
                      </div>
                      </ModalCritica>
                    
                  </ModalInfos>
                  </>
            ))}
            </ModalContent>
        </ModalContainer>
    )

    else return null
}

export default Modal
