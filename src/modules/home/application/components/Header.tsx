import { Card, CardContent } from "@/components/ui/card";
import {TypographyH1} from "@/components/ui/typography/TypographyH1.tsx";

export const Header = () => {
    return (
        <Card className="w-full mx-auto mt-10 bg-blue-950">
            <CardContent className="flex gap-2 p-4">
                <TypographyH1 customClass={"text-amber-600 text-center"}>
                    <span className="text-white">Welcome to</span>&nbsp;Taski
                </TypographyH1>
            </CardContent>
        </Card>
    );
};