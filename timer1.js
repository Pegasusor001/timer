arg = process.argv.slice(2);
for (let item of arg) {
  if (Number(item) && Number(item) > 0) {
    setTimeout(() => {
      console.log('click', '\u0007')
    }, Number(item) * 1000)
  }
}
