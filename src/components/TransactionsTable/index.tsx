import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    });

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Salário</td>
                        <td className="deposit">R$5.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>04/02/2022</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$800,00</td>
                        <td>Casa</td>
                        <td>04/02/2022</td>
                    </tr>
                    <tr>
                        <td>Condomínio</td>
                        <td className="withdraw">- R$300,00</td>
                        <td>Casa</td>
                        <td>04/02/2022</td>
                    </tr>
                    <tr>
                        <td>Celular novo da bonita</td>
                        <td className="withdraw">- R$1400,00</td>
                        <td>Baby</td>
                        <td>05/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}