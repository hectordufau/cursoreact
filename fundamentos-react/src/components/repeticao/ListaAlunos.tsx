import alunos from '../../data/alunos';

const lista = alunos.map(aluno => {
    return (
        <li key={aluno.id}>
            {aluno.id}: {aluno.nome} - {aluno.nota}
        </li>
    )
})

const ListaAlunos = (props: any) => {
  return (
    <div>
      <ul>{lista}</ul>
    </div>
  );
};

export default ListaAlunos;
