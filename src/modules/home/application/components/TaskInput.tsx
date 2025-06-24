import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const TaskInput = () => {
    return (
        <Card className="w-full mx-auto mt-10">
            <CardContent className="flex gap-2 p-4">
                <Input className={'w-1/2'} placeholder="Add new task..." />
                <Select >
                    <SelectTrigger className="w-1/4">
                        <SelectValue placeholder="Priority" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="2">High (+50 XP)</SelectItem>
                        <SelectItem value="1">Medium (+25 XP)</SelectItem>
                        <SelectItem value="0">Low (+10 XP)</SelectItem>
                    </SelectContent>
                </Select>
                <Button className={'w-1/4 bg-amber-600 text-white'} >Add</Button>
            </CardContent>
        </Card>
    );
};