export function validEmailInput(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
