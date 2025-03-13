export const useAnchors = () => {
    if (!document) return {
        push: (id: string) => {}
    }
    const body = document.getElementById('main')
    return {
        push: (id: string) => {
            const element = document.getElementById(id)
            if (!body || !element) return
            body.scrollTo({ top: element?.offsetTop, behavior: 'smooth' })
            useRouter().push({ hash: `#${id}` })
        }
    }
}
