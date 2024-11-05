import { LogoAexol } from '@/src/assets';
import { ContentContainer } from '@/src/components/atoms';
import { UserMenu } from '@/src/components/molecules/UserMenu';
import { Stack } from '@/src/components/atoms/Stack';
import styled from '@emotion/styled';
import { Link } from '@/src/components/atoms/Link';
import { useCart } from '@/src/state/cart';
import { CartDrawer } from '@/src/layouts/CartDrawer';
import { CollectionTileType, NavigationType } from '@/src/graphql/selectors';
import { RootNode } from '@/src/util/arrayToTree';
import { DesktopNavigation } from '@/src/components/organisms/DesktopNavigation';
import { SearchIcon } from 'lucide-react';
import { IconButton } from '@/src/components/molecules/Button';
import { AnnouncementBar } from '@/src/components/organisms/AnnouncementBar';
import { CategoryBar } from './CategoryBar';
import { NavigationSearch } from '@/src/components/organisms/NavgationSearch';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigationSearch } from '@/src/components/organisms/NavgationSearch/hooks';
import { useEffect, useRef } from 'react';
import { Picker } from '@/src/components/organisms/Picker';
import { useTranslation } from 'next-i18next';

interface NavigationProps {
    navigation: RootNode<NavigationType> | null;
    categories: CollectionTileType[];
    changeModal?: {
        modal: boolean;
        channel: string;
        locale: string;
        country_name: string;
    };
}

export const Navigation: React.FC<NavigationProps> = ({ navigation, categories, changeModal }) => {
    const { t } = useTranslation('common');
    const { isLogged, cart } = useCart();
    const navigationSearch = useNavigationSearch();
    const searchRef = useRef<HTMLDivElement>(null);
    const searchMobileRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLButtonElement>(null);

    const handleOutsideClick = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
            searchRef.current && !searchRef.current.contains(target) &&
            iconRef.current && !iconRef.current.contains(target) &&
            searchMobileRef.current && !searchMobileRef.current.contains(target)
        ) {
            navigationSearch.closeSearch();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    // Ensure that the translation keys are correctly accessed
    const entries = t('announcements-bar', { returnObjects: true }) as string[];

    return (
        <>
            <AnnouncementBar entries={entries.map((text, index) => ({ text, href: index === 0 ? '/collections/all' : '/' }))} secondsBetween={5} />
            <StickyContainer>
                <ContentContainer>
                    <Stack itemsCenter justifyBetween gap="5rem" w100>
                        <Stack itemsCenter>
                            <Link ariaLabel={'Home'} href={'/'}>
                                <LogoAexol width={60} />
                            </Link>
                        </Stack>
                        <AnimatePresence>
                            {navigationSearch.searchOpen ? (
                                <DesktopNavigationContainer
                                    style={{ width: '100%' }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    ref={searchRef}>
                                    <NavigationSearch {...navigationSearch} />
                                </DesktopNavigationContainer>
                            ) : (
                                <DesktopNavigation navigation={navigation} />
                            )}
                        </AnimatePresence>
                        <Stack gap="1rem" itemsCenter>
                            <IconButton
                                aria-label="Search products"
                                onClick={navigationSearch.toggleSearch}
                                ref={iconRef}>
                                <SearchIcon />
                            </IconButton>
                            <Picker changeModal={changeModal} />
                            <UserMenu isLogged={isLogged} />
                            <CartDrawer activeOrder={cart} />
                        </Stack>
                    </Stack>
                </ContentContainer>
                {navigationSearch.searchOpen && (
                    <MobileNavigationContainer ref={searchMobile
