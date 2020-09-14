class Util{
    constructor() {
    }
    // 클립보드 복사 
    static cilpCopy( value ){
        let textArea = document.createElement('textarea');
        textArea.value = value;
        document.body.append( textArea );
        textArea.select();
        textArea.setSelectionRange(0, 1);

        document.execCommand('copy');
        document.body.removeChild( textArea );
    }

}

export default Util;