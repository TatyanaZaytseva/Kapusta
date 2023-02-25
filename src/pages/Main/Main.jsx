import BackgroundPrivateContainer from 'components/BackgroundPrivateContainer';
import Container from 'components/Container';
// import Summary from 'components/Summary';
import Table from 'components/Table';
import TransactionListMobile from 'components/TransactionListMobile';
import { useMedia } from 'hooks/useMedia';

export default function Main() {
  const { isTabletAndDesktop, isMobile } = useMedia();

  return (
    <BackgroundPrivateContainer>
      <Container>
        <h1>MAIN PAGE</h1>
        {isTabletAndDesktop && <Table />}
        {isMobile && <TransactionListMobile />}
      </Container>
    </BackgroundPrivateContainer>
  );
}
