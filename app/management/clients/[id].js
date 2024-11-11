import { useRouter } from "next/router";

export async function getStaticPath(){
    const paths = [
        { param: {id: '1'} },
        { param: {id: '2'} }
    ]
    return {paths, fallback: 'blocking'}
}

export async function getStaticProps(){
    const { id } = params;
    const product = { id, nome: `Produto xablau${id}`, description: `essas porra funciona ${id}`}

    return { props: product }
}

export default cliente = () =>{
    const {router} = useRouter()
    const {id} = router.query


    return <div>
        Cliente {id}
    </div>
}