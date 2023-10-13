import i18n from '@i18n';

export const localeDefault = () =>{
    let locale = window.localStorage.getItem("Language");
    if (locale){
        return locale == 'vi' ? 'Tiếng Việt' : 'English'
    }
    else return 'Tiếng Việt';
}

export const handleLocale = (locale: string) => {
    i18n.changeLanguage(locale === "en" ? "en" : "vi")
    if(locale == 'vi') {
        window.localStorage.setItem('Language', 'vi')
    }
    else window.localStorage.setItem('Language', 'en')
}
