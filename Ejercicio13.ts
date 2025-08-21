enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue"
}

function showColorMessage(color: Color) {
    console.log(`El color es ${color}`)
}

showColorMessage(Color.Green)
