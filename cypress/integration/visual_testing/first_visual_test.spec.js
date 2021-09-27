describe.skip('Home Page resolution testing', () => {
    it('Desktop Layout', () => {
        cy.setResolution([1280, 720]);
        cy.matchImageSnapshot();
    })

    it('Tablet Layout', () => {
        cy.setResolution('ipad-2');
        cy.matchImageSnapshot();
    })

    it('Mobile Layout', () => {
        cy.setResolution('iphone-x');
        cy.matchImageSnapshot();
    })
})

const pages = ['/runpage?page=recentFilings', '//formlist'];
const sizes = ['iphone-x', [1200, 800]];

describe.skip('Multiple Resolutions', () => {
    sizes.forEach(size => {
        pages.forEach(page => {
            it(`Should match ${page} in resolution ${size}`,  () => {
                cy.setResolution(size);
                cy.visit(page);
                cy.matchImageSnapshot();

            })
        })
    }

    )

})


