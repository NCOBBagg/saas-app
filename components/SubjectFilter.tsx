'use client'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {subjects} from "@/constants";
import {useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import {formUrlQuery, removeKeysFromUrlQuery} from "@jsmastery/utils";

const SubjectFilter = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const query = searchParams.get('subject') || '';

    const [subject, setSubject] = useState(query)

    useEffect(() => {
        let newUrl = ""
        if (subject === 'all') {
            newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['subject'],
            })
        } else {
            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: 'subject',
                value: subject,
            })
        }
        router.push(newUrl, {scroll: false})

    }, [subject])

    return (
        <Select onValueChange={setSubject}  >
            <SelectTrigger className="input capitalize">
                <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value='all'> All subjects</SelectItem>
                {subjects.map((subject) => (
                    <SelectItem value={subject} key={subject} className="capitalize">
                        {subject}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>

    );
};

export default SubjectFilter;