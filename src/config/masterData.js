
import locale from '@/config/locale.json'

import leaveApprovalIcon from '@/assets/img/approval-leave-icon.svg';
import departmentIcon from '@/assets/img/department-icon.svg';
import leaveDayIcon from '@/assets/img/leave-day-icon.svg';
import manageIcon from '@/assets/img/manage-icon.svg';
import scheduleIcon from '@/assets/img/schedule-icon.svg';
import calendarIcon from '@/assets/img/calendar.svg';
import carouselFsStep from "@/assets/img/step-leave1.png";
import carouselScStep from "@/assets/img/step-leave2.png";
import carouselTdStep from "@/assets/img/step-leave3.png";
import carouselFsIcon from "@/assets/img/small-notice-leave.svg";
import carouselScIcon from "@/assets/img/small-approve.svg";
import carouselTdIcon from "@/assets/img/small-vacation.svg";
import clockIcon from "@/assets/img/clock-icon.svg";
import editIcon from "@/assets/img/edit-icon.svg";
import historyIcon from "@/assets/img/history-icon.svg";
import userIcon from "@/assets/img/user-icon.svg";
import permissionIcon from "@/assets/img/permission-icon.svg";
import tabFsStep from "@/assets/img/tab-1.png";
import tabScStep from "@/assets/img/tab-2.png";
import tabTdStep from "@/assets/img/tab-3.png";

import tabActiveFsIcon from "@/assets/img/tab-1-active.svg";
import tabActiveScIcon from "@/assets/img/tab-2-active.svg";
import tabActiveTdIcon from "@/assets/img/tab-3-active.svg";
import tabFsIcon from "@/assets/img/tab-1-non.svg";
import tabScIcon from "@/assets/img/tab-2-non.svg";
import tabTdIcon from "@/assets/img/tab-3-non.svg";

import packageFs from '@/assets/img/package-1.svg';
import packageSc from '@/assets/img/package-2.svg';
import packageTd from '@/assets/img/package-3.svg';


const promotionListLocales = [
    { title: locale.vannila_detail.promotion.promotion_list.first },
    { title: locale.vannila_detail.promotion.promotion_list.second },
    { title: locale.vannila_detail.promotion.promotion_list.third },
    { title: locale.vannila_detail.promotion.promotion_list.forth },
    { title: locale.vannila_detail.promotion.promotion_list.fifth }
]

const package_list = [
    {
        "title": "Cone",
        "net": "290",
        "price": "350"
    },
    {
        "title": "Cone",
        "net": "590",
        "price": "690"
    },
    {
        "title": "Cone",
        "net": "890",
        "price": "1,090"
    }
]


export const headerRouter = [
    { title: locale.header.home, path: '/' },
    { title: locale.header.price, path: '/price' },
    { title: locale.header.article, path: '/article' },
    { title: locale.header.contact, path: '/contact' }
]

export const hrContent = [
    { title: locale.vannila_detail.benefits.line_notice, icon: leaveApprovalIcon },
    { title: locale.vannila_detail.benefits.approval_leave, icon: leaveDayIcon },
    { title: locale.vannila_detail.benefits.department, icon: departmentIcon },
    { title: locale.vannila_detail.benefits.team_member, icon: manageIcon },
    { title: locale.vannila_detail.benefits.schedule, icon: scheduleIcon }
]

export const leaveRequest = [
    { title: locale.vannila_detail.leve_request.notice, icon: leaveApprovalIcon },
    { title: locale.vannila_detail.leve_request.approve, icon: leaveDayIcon },
    { title: locale.vannila_detail.leve_request.assign, icon: calendarIcon },
]

export const carouselSteps = [
    { title: locale.vannila_detail.carousel_steps.notice, image: carouselFsStep, iconStep: carouselFsIcon },
    { title: locale.vannila_detail.carousel_steps.approve, image: carouselScStep, iconStep: carouselScIcon },
    { title: locale.vannila_detail.carousel_steps.vacation, image: carouselTdStep, iconStep: carouselTdIcon },
]

export const employeeData = [
    {
        title: locale.vannila_detail.employee.second_title,
        subTitle: locale.vannila_detail.employee.sub_title_profile,
        icon: [{ title: locale.vannila_detail.employee.employee_profile.remainder, icon: clockIcon, },
        { title: locale.vannila_detail.employee.employee_profile.profile, icon: userIcon, },
        { title: locale.vannila_detail.employee.employee_profile.history, icon: historyIcon },]
    },
    {
        title: locale.vannila_detail.employee.third_title,
        subTitle: locale.vannila_detail.employee.sub_title_management,
        icon: [
            { title: locale.vannila_detail.employee.employee_management.edit, icon: editIcon },
            { title: locale.vannila_detail.employee.employee_management.permission, icon: permissionIcon },]
    }

]

export const tabs = [
    { title: locale.vannila_detail.tabs.manage, image: tabFsStep, iconA: tabActiveFsIcon, icon: tabFsIcon },
    { title: locale.vannila_detail.tabs.edit, image: tabScStep, iconA: tabActiveScIcon, icon: tabScIcon },
    { title: locale.vannila_detail.tabs.move, image: tabTdStep, iconA: tabActiveTdIcon, icon: tabTdIcon },
]

export const promotionList = [
    { package: package_list[0], image: packageFs, list: promotionListLocales },
    { package: package_list[1], image: packageSc, list: promotionListLocales },
    { package: package_list[2], image: packageTd, list: promotionListLocales },
]



