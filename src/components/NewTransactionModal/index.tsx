import { FormEvent, useState, useContext } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import closeImg from '../../assets/close.svg';
import { api } from '../../services/api';
import { useTransactions } from '../../hooks/useTransactions';


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestclose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestclose} : NewTransactionModalProps){
  const { createTransaction } = useTransactions();

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');

    async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();

      await createTransaction({
        title,
        amount,
        category,
        type
      });

      setTitle('');
      setAmount(0);
      setCategory('');
      setType('deposit');

      onRequestclose();
    };

    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestclose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
        >
          <button 
            type="button" 
            onClick={onRequestclose} 
            className="react-modal-close"
          >
            <img src={closeImg} alt="Fechar modal" />
          </button>

          <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input
              placeholder="Titulo"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />

            <input
              type="number"
              placeholder="Valor"
              value={amount}
              onChange={event => setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
              <RadioBox
                type="button"
                onClick={() => {setType('deposit');}}
                isActive={type === 'deposit'}
                activeColor="green"
              >
                <img src={incomeImg} alt="Entrada" />
                <span>Entrada</span>
              </RadioBox>

              <RadioBox
                type="button"
                onClick={() => {setType('withdraw');}}
                isActive={type === 'withdraw'}
                activeColor="red"
              >
                <img src={outcomeImg} alt="Saída" />
                <span>Saída</span>
              </RadioBox>
            </TransactionTypeContainer>

            <input
              placeholder="Categoria"
              value={category}
              onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
              Cadastrar
            </button>
          </Container>
        </Modal>
    );
}