import { profissoes } from "./profissoes.js";

document.addEventListener('DOMContentLoaded', () => {

    const cardsContainer = document.querySelector('#cards-container');
    const filtersContainer = document.getElementById('filters');
    const btnLight = document.getElementById('btn-light-mode');
    const btnDarkMode = document.getElementById('btn-dark-mode');
    const htmlElement = document.documentElement; 
    const btnMobileMenu = document.getElementById('btn-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu'); 


    if (btnMobileMenu && mobileMenu) {
        btnMobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden'); 
        });
    }

//     if (btnLight && btnDark && htmlElement) {
//     btnLight.addEventListener('click', () => {
//         htmlElement.classList.remove('dark');
//     });

//     btnDark.addEventListener('click', () => {
//         htmlElement.classList.add('dark');
//     });
// }
    const idToArea = {
        'filter-todos': 'Todos',
        'filter-tecnologia': 'Tecnologia e Inovação',
        'filter-sustentabilidade': 'Sustentabilidade e Meio Ambiente',
        'filter-saude': 'Educação, Saúde e Desenvolvimento Humano',
        'filter-negocios': 'Negócios, Dados e Economia Digital',
        'filter-industria': 'Indústria, Engenharia e Produção'
    };

    function formatarSalario(valor) {
        if (!valor) return '—';
        if (typeof valor === 'string' && valor.includes('-')) {
            const partes = valor.split('-').map(v => {
                const num = parseFloat(v.trim().replace(/\D/g, ''));
                return !isNaN(num) ? new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 0
                }).format(num) : v.trim();
            });
            return partes.join(' - ');
        }
        const num = typeof valor === 'string' ? parseFloat(valor.replace(/\D/g, '')) : valor;
        if (isNaN(num)) return valor;
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 0
        }).format(num);
    }

    function renderCards(profissoesFilter) {
        if (!cardsContainer) return;
        cardsContainer.innerHTML = '';
        profissoesFilter.forEach(profissao => {
            const salarioFormatado = formatarSalario(profissao.mediaSalarial);
            const card = document.createElement('div');
            card.className = 'border border-gray-300 dark:border-gray-900 rounded-lg shadow-lg bg-white dark:bg-gray-900 overflow-hidden flex flex-col h-full ' +
            'transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl';
            card.innerHTML = `
                <img src="${profissao.imagem}" alt="${profissao.titulo}" class="w-full h-40 object-cover">
                <div class="p-5 flex flex-col flex-1">
                    <div class="flex-1 mb-4">
                        <h3 class="text-2xl font-semibold text-slate-900 dark:text-gray-100 mb-3">${profissao.titulo}</h3>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class=" dark:text-gray-100 font-medium text-slate-800">Área:</span> ${profissao.area}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class="font-medium text-slate-800  dark:text-gray-100">Demanda:</span> ${profissao.demanda}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300 line-clamp-2"><span class="font-medium text-slate-800  dark:text-gray-100">Descrição:</span> ${profissao.descricao}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class="font-medium text-slate-800  dark:text-gray-100">Competências:</span> ${profissao.competencia}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class="font-medium text-slate-800  dark:text-gray-100">Formação:</span> ${profissao.formacao}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class="font-medium text-slate-800  dark:text-gray-100">Média Salarial:</span> ${salarioFormatado}</p>
                        <p class="text-sm text-slate-600 mb-2  dark:text-gray-300"><span class="font-medium text-slate-800  dark:text-gray-100">Impacto:</span> ${profissao.impactoSocial}</p>
                    </div>
                    <a href="#" class="block w-full bg-[#A59CFF] py-2 text-white text-center rounded hover:bg-indigo-500 transition-colors duration-300 font-medium">Ver Detalhes</a>
                </div>
            `;
            cardsContainer.appendChild(card);
        });
    }

    if (filtersContainer) {
        const filterButtons = filtersContainer.querySelectorAll('button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const area = idToArea[button.id] || button.textContent.trim();
                if (area === 'Todos') {
                    renderCards(profissoes);
                } else {
                    const filtered = profissoes.filter(prof => prof.area === area);
                    renderCards(filtered);
                }
            });
        });
    }

    renderCards(profissoes);

}); 