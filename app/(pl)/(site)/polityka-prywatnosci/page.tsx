import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { business, legal, site } from "@/lib/data";
import { pageMetadata } from "@/lib/metadata";

// TEMPLATE: to be reviewed by Marta (ideally with a lawyer) before launch.

export const metadata: Metadata = pageMetadata({
  path: "/polityka-prywatnosci",
  title: "Polityka prywatności",
  description: `Jak ${site.name} przetwarza Twoje dane osobowe: formularz kontaktowy, aplikacja na współpracę, zakupy produktów cyfrowych i statystyki bez plików cookie.`,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Polityka prywatności">
      <p>
        Szanuję Twoją prywatność. Poniżej wyjaśniam, jakie dane zbieram, po co, jak długo je
        przechowuję i jakie masz prawa. Dane przetwarzam zgodnie z brytyjskim RODO (UK GDPR) oraz
        ustawą Data Protection Act 2018.
      </p>

      <h2>1. Kto jest administratorem Twoich danych</h2>
      <p>
        Administratorem danych jest <strong>{business.legalName}</strong>, prowadząca działalność
        pod nazwą {business.tradingName} ({business.legalForm}), adres: {business.address}.
      </p>
      <p>
        Kontakt w sprawach danych osobowych:{" "}
        <a href={`mailto:${business.email}`}>{business.email}</a>. Numer rejestracji w Information
        Commissioner&apos;s Office (ICO): {business.icoNumber}.
      </p>

      <h2>2. Jakie dane zbieram i w jakim celu</h2>

      <h3>Formularz kontaktowy</h3>
      <p>
        Gdy wysyłasz wiadomość, przetwarzam Twoje imię, adres e-mail i treść wiadomości, żeby Ci
        odpowiedzieć. Podstawa prawna: Twoja zgoda (art. 6 ust. 1 lit. a UK GDPR) oraz podjęcie
        działań na Twoje żądanie przed zawarciem umowy (art. 6 ust. 1 lit. b). Zgodę możesz
        wycofać w każdej chwili, pisząc na adres podany wyżej.
      </p>

      <h3>Aplikacja na współpracę i współpraca 1:1</h3>
      <p>
        Formularz aplikacyjny i współpraca online prowadzone są na platformie onlinecoaching.io.
        W aplikacji podajesz m.in. dane kontaktowe, informacje o celach, stylu życia i zdrowiu.
        Informacje o zdrowiu to szczególna kategoria danych, dlatego przetwarzam je wyłącznie na
        podstawie Twojej wyraźnej zgody (art. 9 ust. 2 lit. a UK GDPR) i tylko po to, by
        przygotować bezpieczny plan. Pozostałe dane przetwarzam w celu zawarcia i wykonania umowy
        (art. 6 ust. 1 lit. b).
      </p>

      <h3>Zakup produktów cyfrowych</h3>
      <p>
        Przy zakupie e-booka lub planu przetwarzane są dane potrzebne do realizacji zamówienia:
        imię i nazwisko, adres e-mail, dane rozliczeniowe i historia zamówienia. Płatność obsługuje{" "}
        {business.paymentProvider}; nie mam dostępu do pełnych danych Twojej karty. Podstawa prawna:
        wykonanie umowy (art. 6 ust. 1 lit. b) oraz obowiązki księgowe i podatkowe (art. 6 ust. 1
        lit. c).
      </p>

      <h3>Wiadomości przez Instagram i e-mail</h3>
      <p>
        Jeśli piszesz do mnie bezpośrednio, przetwarzam dane zawarte w korespondencji, żeby Ci
        odpowiedzieć (prawnie uzasadniony interes, art. 6 ust. 1 lit. f). Wiadomości na Instagramie
        podlegają również{" "}
        <a href="https://privacycenter.instagram.com/policy">
          zasadom prywatności Instagrama
        </a>
        .
      </p>

      <h2>3. Statystyki odwiedzin i pliki cookie</h2>
      <p>
        Ta strona <strong>nie używa plików cookie</strong> ani skryptów śledzących i nie wyświetla
        reklam. Korzystam z Vercel Web Analytics, które liczy odwiedziny w sposób zbiorczy, bez
        plików cookie i bez zapisywania czegokolwiek na Twoim urządzeniu. Nie pozwala to ustalić,
        kim jesteś. Podstawa prawna: prawnie uzasadniony interes w ulepszaniu strony (art. 6 ust. 1
        lit. f).
      </p>
      <p>
        Jak każdy serwer, hosting strony automatycznie rejestruje techniczne dane o połączeniu
        (np. adres IP, typ przeglądarki, czas wizyty) w celu zapewnienia bezpieczeństwa. Dane te są
        przechowywane krótko przez dostawcę hostingu.
      </p>
      <p>
        Strona linkuje do zewnętrznych serwisów (Instagram, onlinecoaching.io, operator płatności).
        Po przejściu na nie obowiązują ich własne zasady prywatności i plików cookie.
      </p>

      <h2>4. Komu przekazuję dane</h2>
      <p>
        Korzystam z zaufanych dostawców (podmiotów przetwarzających), którzy przetwarzają dane
        wyłącznie na moje polecenie i na podstawie umów powierzenia:
      </p>
      <ul>
        {legal.processors.map((processor) => (
          <li key={processor.name}>
            <strong>{processor.name}</strong>: {processor.purpose}. Lokalizacja: {processor.location}.
          </li>
        ))}
      </ul>
      <p>Nie sprzedaję Twoich danych i nie przekazuję ich w celach marketingowych.</p>

      <h2>5. Przekazywanie danych poza Wielką Brytanię</h2>
      <p>
        Niektórzy dostawcy mają siedzibę w USA lub przetwarzają dane w Unii Europejskiej. Przekazanie
        odbywa się na podstawie przepisów o odpowiednim stopniu ochrony (np. UK Extension to the
        EU-US Data Privacy Framework lub decyzje dotyczące państw UE) albo standardowych klauzul
        umownych zatwierdzonych przez ICO (IDTA lub UK Addendum).
      </p>

      <h2>6. Jak długo przechowuję dane</h2>
      <ul>
        <li>Wiadomości z formularza kontaktowego: {legal.contactRetention}.</li>
        <li>
          Dane z aplikacji i współpracy 1:1: przez czas współpracy, a następnie do 12 miesięcy na
          wypadek pytań lub powrotu do współpracy, chyba że wcześniej poprosisz o usunięcie.
          [PLACEHOLDER] potwierdzić okres.
        </li>
        <li>Dane zamówień: 6 lat od końca roku podatkowego, zgodnie z wymogami HMRC.</li>
      </ul>

      <h2>7. Twoje prawa</h2>
      <p>Masz prawo do:</p>
      <ul>
        <li>dostępu do swoich danych i otrzymania ich kopii,</li>
        <li>sprostowania nieprawidłowych danych,</li>
        <li>usunięcia danych („prawo do bycia zapomnianą”),</li>
        <li>ograniczenia przetwarzania,</li>
        <li>przenoszenia danych,</li>
        <li>sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie,</li>
        <li>wycofania zgody w dowolnym momencie (bez wpływu na wcześniejsze przetwarzanie).</li>
      </ul>
      <p>
        Aby skorzystać z tych praw, napisz na <a href={`mailto:${business.email}`}>{business.email}</a>.
        Odpowiem bez zbędnej zwłoki, najpóźniej w ciągu miesiąca.
      </p>

      <h2>8. Skarga do organu nadzorczego</h2>
      <p>
        Jeśli uważasz, że przetwarzam Twoje dane niezgodnie z prawem, możesz złożyć skargę do
        Information Commissioner&apos;s Office (
        <a href="https://ico.org.uk/make-a-complaint/">
          ico.org.uk
        </a>
        ). Jeśli mieszkasz w Polsce, możesz też zwrócić się do Prezesa Urzędu Ochrony Danych
        Osobowych (
        <a href="https://uodo.gov.pl">
          uodo.gov.pl
        </a>
        ). Będzie mi miło, jeśli najpierw napiszesz do mnie – postaram się wszystko wyjaśnić.
      </p>

      <h2>9. Czy muszę podać dane</h2>
      <p>
        Podanie danych jest dobrowolne, ale bez nich nie mogę odpowiedzieć na wiadomość, przyjąć
        aplikacji ani zrealizować zamówienia. Nie podejmuję wobec Ciebie decyzji opartych wyłącznie
        na zautomatyzowanym przetwarzaniu.
      </p>

      <h2>10. Zmiany polityki</h2>
      <p>
        Mogę aktualizować tę politykę, np. gdy zmienię dostawcę usług. Aktualna wersja jest zawsze
        dostępna na tej stronie, z datą ostatniej zmiany. Zobacz też{" "}
        <Link href="/regulamin">Regulamin</Link>.
      </p>
    </LegalPage>
  );
}
