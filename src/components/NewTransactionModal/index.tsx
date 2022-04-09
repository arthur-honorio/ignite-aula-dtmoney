import { FormEvent, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { useTransactions } from "../../hooks/useTransactions"
import { Container, RadioBox, TransactionTypeContainer } from "./styles"

Modal.setAppElement("#root")

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [type, setType] = useState("deposit")
  const [amount, setAmount] = useState(0)

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()
    await createTransaction({ amount, category, title, type })

    setCategory("")
    setTitle("")
    setAmount(0)
    setType("deposit")

    onRequestClose()
  }

  return (
    <Modal
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
    >
      <button
        className="react-close-modal"
        onClick={onRequestClose}
        type="button"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Adicionar Transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <input
          onChange={event => setAmount(Number(event.target.value))}
          placeholder="Valor"
          type="number"
          value={amount}
        />
        <TransactionTypeContainer>
          <RadioBox
            activeColor="green"
            isActive={type === "deposit"}
            onClick={() => setType("deposit")}
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            activeColor="red"
            isActive={type === "withdraw"}
            onClick={() => setType("withdraw")}
            type="button"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          onChange={event => setCategory(event.target.value)}
          placeholder="Categoria"
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
