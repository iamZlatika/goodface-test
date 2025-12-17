import DefaultButton from "@/components/ui/buttons/default-button";
import { dictionary } from "@/lib/i18n/dictionary";
import ChevronLeftIcon from "@/components/icons/chevron-left-icon";
import MainCard from "@/components/features/main-card";
import { OrderProvider } from "@/providers/order-provider";
import SummaryCard from "@/components/features/summary-card";
import ContinueButton from "@/components/ui/buttons/continue-button";
import MastercardIcon from "@/components/icons/mastercard-icon";
import VisaIcon from "@/components/icons/visa-icon";
import AmericanExpressIcon from "@/components/icons/american-express-icon";
import PMIcon from "@/components/icons/pm-icon";
import UnionPayIcon from "@/components/icons/up-icon";
import BenefitsCard from "@/components/features/benefits-card";

const ProductOrderPage = () => {
    return (
        <OrderProvider>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                <div className="w-full lg:min-w-[680px]">
                    <DefaultButton
                        label={dictionary.main.back_button}
                        startIcon={<ChevronLeftIcon />}
                    />
                    <MainCard />
                    <div className="hidden lg:block">
                        <BenefitsCard />
                    </div>
                </div>

                <div className="lg:mt-7">
                    <SummaryCard />
                    <ContinueButton label={dictionary.summary.continue_button} />
                    <div className="mt-3 flex items-center justify-center gap-2 max-w-[680px]">
                        <div className="w-10 h-6 flex items-center justify-center">
                            <VisaIcon className="grayscale" />
                        </div>
                        <div className="w-10 h-6 flex items-center justify-center">
                            <MastercardIcon className="grayscale" />
                        </div>
                        <div className="w-10 h-6 flex items-center justify-center">
                            <AmericanExpressIcon className="grayscale" />
                        </div>
                        <div className="w-10 h-6 flex items-center justify-center">
                            <PMIcon className="grayscale" />
                        </div>
                        <div className="w-10 h-6 flex items-center justify-center">
                            <UnionPayIcon className="grayscale" />
                        </div>
                    </div>
                </div>
            </div>
        </OrderProvider>
    );
};

export default ProductOrderPage;
