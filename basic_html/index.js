const basic_html = import('./basic_html')

const titleStyle = `
    style="
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    overflow: hidden;
    "
`
const author = `<p> Geoffrey Aaron </p>`;

async function components(){
    const module = await basic_html;
    
    module.generate(`<div $${titleStyle}> 
        <div> 
            <h1> This Website is powered by WASM </h1>
        </div>
        <div> 
            ${author}
        </div> 
    </div>`)
}

components();



