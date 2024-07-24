document.getElementById('toggle-lang-btn').addEventListener('click', function() {
    const langBtn = document.getElementById('toggle-lang-btn');
    const isEnglish = langBtn.textContent.includes('Dutch');

    if (isEnglish) {
        langBtn.textContent = 'Switch to English';
        document.getElementById('header-title').textContent = 'Privacybeleid';
        document.getElementById('introduction-title').textContent = 'Inleiding';
        document.getElementById('introduction-content').textContent = 'Dit privacybeleid is van toepassing op de HealthDetective-app (hierna "Applicatie" genoemd) voor mobiele apparaten die is gemaakt door Jarik Okkerman (hierna "Serviceprovider" genoemd) als een gratis service. Deze service is bedoeld voor gebruik "AS IS".';
        document.getElementById('info-collection-title').textContent = 'Informatie Verzameling en Gebruik';
        document.getElementById('info-collection-content').textContent = 'De applicatie verkrijgt geen informatie wanneer u deze download en gebruikt. Registratie is niet vereist om de applicatie te gebruiken.';
        document.getElementById('location-info-title').textContent = 'Locatie Informatie';
        document.getElementById('location-info-content').textContent = 'Deze applicatie verzamelt geen precieze informatie over de locatie van uw mobiele apparaat.';
        document.getElementById('third-party-title').textContent = 'Toegang Derden';
        document.getElementById('third-party-content').textContent = 'Aangezien de applicatie geen informatie verzamelt, worden er geen gegevens gedeeld met derden.';
        document.getElementById('opt-out-title').textContent = 'Afmeldingsrechten';
        document.getElementById('opt-out-content').textContent = 'U kunt alle verzameling van informatie door de applicatie eenvoudig stoppen door deze te verwijderen. U kunt de standaard verwijderingsprocessen gebruiken die beschikbaar kunnen zijn als onderdeel van uw mobiele apparaat of via de mobiele applicatiewinkel of het netwerk.';
        document.getElementById('children-title').textContent = 'Kinderen';
        document.getElementById('children-content').textContent = 'De applicatie wordt niet gebruikt om bewust gegevens te vragen van of te marketen naar kinderen onder de 13 jaar.';
        document.getElementById('children-content-2').textContent = 'De Serviceprovider verzamelt niet bewust persoonlijk identificeerbare informatie van kinderen. De Serviceprovider moedigt alle kinderen aan om nooit persoonlijke identificeerbare informatie in te dienen via de applicatie en/of diensten. De Serviceprovider moedigt ouders en wettelijke voogden aan om het internetgebruik van hun kinderen te controleren en dit beleid te helpen handhaven door hun kinderen te instrueren nooit persoonlijke identificeerbare informatie te verstrekken via de applicatie en/of diensten zonder hun toestemming. Als u reden heeft om aan te nemen dat een kind persoonlijk identificeerbare informatie heeft verstrekt aan de Serviceprovider via de applicatie en/of diensten, neem dan contact op met de Serviceprovider (jarikokkerman@icloud.com) zodat zij de nodige maatregelen kunnen nemen. U moet ook minstens 16 jaar oud zijn om toestemming te geven voor de verwerking van uw persoonlijk identificeerbare informatie in uw land (in sommige landen kunnen we toestaan dat uw ouder of voogd dit namens u doet).';
        document.getElementById('security-title').textContent = 'Beveiliging';
        document.getElementById('security-content').textContent = 'De Serviceprovider is bezorgd over het waarborgen van de vertrouwelijkheid van uw informatie. Aangezien de applicatie echter geen informatie verzamelt, is er geen risico dat uw gegevens worden benaderd door ongeautoriseerde personen.';
        document.getElementById('changes-title').textContent = 'Wijzigingen';
        document.getElementById('changes-content').textContent = 'Dit privacybeleid kan van tijd tot tijd om welke reden dan ook worden bijgewerkt. De Serviceprovider zal u op de hoogte stellen van eventuele wijzigingen in hun privacybeleid door deze pagina bij te werken met het nieuwe privacybeleid. U wordt geadviseerd dit privacybeleid regelmatig te raadplegen voor eventuele wijzigingen, aangezien voortgezet gebruik wordt beschouwd als goedkeuring van alle wijzigingen.';
        document.getElementById('effective-date').textContent = 'Dit privacybeleid is van kracht vanaf 2024-07-24';
        document.getElementById('consent-title').textContent = 'Uw Toestemming';
        document.getElementById('consent-content').textContent = 'Door de applicatie te gebruiken, stemt u in met de verwerking van uw informatie zoals uiteengezet in dit privacybeleid nu en zoals gewijzigd door de Serviceprovider.';
        document.getElementById('contact-title').textContent = 'Contacteer Ons';
        document.getElementById('contact-content').innerHTML = 'Als u vragen heeft over privacy tijdens het gebruik van de applicatie, of als u vragen heeft over de praktijken, neem dan contact op met de Serviceprovider via e-mail op jarikokkerman@icloud.com.';
        } else {
        langBtn.textContent = 'Switch to Dutch';
        document.getElementById('header-title').textContent = 'Privacy Policy';
        document.getElementById('introduction-title').textContent = 'Introduction';
        document.getElementById('introduction-content').textContent = 'This privacy policy applies to the HealthDetective app (hereby referred to as “Application”) for mobile devices that was created by Jarik Okkerman (hereby referred to as “Service Provider”) as a Free service. This service is intended for use “AS IS”.';
        document.getElementById('info-collection-title').textContent = 'Information Collection and Use';
        document.getElementById('info-collection-content').textContent = 'The Application does not obtain any information when you download and use it. Registration is not required to use the Application.';
        document.getElementById('location-info-title').textContent = 'Location Information';
        document.getElementById('location-info-content').textContent = 'This Application does not collect precise information about the location of your mobile device.';
        document.getElementById('third-party-title').textContent = 'Third Party Access';
        document.getElementById('third-party-content').textContent = 'Since the Application does not collect any information, no data is shared with third parties.';
        document.getElementById('opt-out-title').textContent = 'Opt-Out Rights';
        document.getElementById('opt-out-content').textContent = 'You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.';
        document.getElementById('children-title').textContent = 'Children';
        document.getElementById('children-content').textContent = 'The Application is not used to knowingly solicit data from or market to children under the age of 13.';
        document.getElementById('children-content-2').textContent = 'The Service Provider does not knowingly collect personally identifiable information from children. The Service Provider encourages all children to never submit any personally identifiable information through the Application and/or Services. The Service Provider encourages parents and legal guardians to monitor their childrens Internet usage and to help enforce this Policy by instructing their children never to provide personally identifiable information through the Application and/or Services without their permission. If you have reason to believe that a child has provided personally identifiable information to the Service Provider through the Application and/or Services, please contact the Service Provider (jarikokkerman@icloud.com) so that they will be able to take the necessary actions. You must also be at least 16 years of age to consent to the processing of your personally identifiable information in your country (in some countries we may allow your parent or guardian to do so on your behalf).';
        document.getElementById('security-title').textContent = 'Security';
        document.getElementById('security-content').textContent = 'The Service Provider is concerned about safeguarding the confidentiality of your information. However, since the Application does not collect any information, there is no risk of your data being accessed by unauthorized individuals.';
        document.getElementById('changes-title').textContent = 'Changes';
        document.getElementById('changes-content').textContent = 'This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to their Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.';
        document.getElementById('effective-date').textContent = 'This privacy policy is effective as of 2024-07-24';
        document.getElementById('consent-title').textContent = 'Your Consent';
        document.getElementById('consent-content').textContent = 'By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by the Service Provider.v';
        document.getElementById('contact-title').textContent = 'Contact Us';
        document.getElementById('contact-content').innerHTML = 'If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at jarikokkerman@icloud.com.';
        }
        });