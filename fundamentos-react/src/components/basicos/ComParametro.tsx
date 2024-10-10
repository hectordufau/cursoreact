export default function ComParametro(props: any) {
  const { titulo, aluno, nota } = props;
  const status = nota >= 7 ? "Aprovado" : "Reprovado";
  return (
    <div>
      <h2>{titulo}</h2>
      <p>
        <strong>{aluno} </strong>
        tem nota
        <strong> {nota} </strong>e está
        <strong> {status}</strong>
      </p>
    </div>
  );
}
