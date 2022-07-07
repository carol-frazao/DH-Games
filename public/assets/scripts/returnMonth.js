function returnMonth() {

    const date = new Date();
    const monthName = date.toLocaleString("pt-BR", { month: "long" });
    
    return monthName
}

const month = new Date().toLocaleString("pt-BR", {month: "long"})