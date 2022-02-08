import Modal from 'react-modal';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestclose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestclose} : NewTransactionModalProps){
    return(
        <Modal 
          isOpen={isOpen}
          onRequestClose={onRequestclose}
        >
          <h2>Cadastrar Transação</h2>
        </Modal>
    );
}