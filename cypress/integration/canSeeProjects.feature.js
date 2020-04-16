describe('User can see list of projects', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
        cy.get('#projects-tab').click();
    })

    it('displays the first project', () => {
        cy.get('#project-1').within(() => {
            cy.get('.ui.header').should('contain', 'My First Website');
            cy.get(('.image')).should('exist');
            cy.get('.description').should('contain', 'This was my first project');
        })
    });

    it('displays second project', () => {
        cy.get('#project-2').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('.ui.header').should('contain', 'UI Design');
            cy.get('.description').should('contain', 'Designing user interfaces')
        })
    })

    it('displays third project', () => {
        cy.get('#project-3').within(() => {
            cy.get(('.image')).should('exist');
            cy.get('ui.header').should('contain', 'Mobile UX');
            cy.get('.description').should('contain', 'mobile platform')
        })
    });
});