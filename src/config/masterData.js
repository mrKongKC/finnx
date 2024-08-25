
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


export const headerRouter = [
    { title: locale.header.home, path: '/' },
    { title: locale.header.price, path: '/price' },
    { title: locale.header.article, path: '/article' },
    { title: locale.header.contact, path: '/contact' }
]

export const hrContent = [
    { title: locale.human_resource.benefits.line_notice, icon: leaveApprovalIcon },
    { title: locale.human_resource.benefits.approval_leave, icon: leaveDayIcon },
    { title: locale.human_resource.benefits.department, icon: departmentIcon },
    { title: locale.human_resource.benefits.team_member, icon: manageIcon },
    { title: locale.human_resource.benefits.schedule, icon: scheduleIcon }
]

export const leaveRequest = [
    { title: locale.human_resource.leve_request.notice, icon: leaveApprovalIcon },
    { title: locale.human_resource.leve_request.approve, icon: leaveDayIcon },
    { title: locale.human_resource.leve_request.assign, icon: calendarIcon },
]

export const carouselSteps = [
    { title: locale.human_resource.carousel_steps.notice, image: carouselFsStep, iconStep: carouselFsIcon },
    { title: locale.human_resource.carousel_steps.approve, image: carouselScStep, iconStep: carouselScIcon },
    { title: locale.human_resource.carousel_steps.vacation, image: carouselTdStep, iconStep: carouselTdIcon },
]

export const employeeData = [
    {
        title: locale.human_resource.employee.second_title,
        subTitle: locale.human_resource.employee.sub_title_profile,
        icon: [{ title: locale.human_resource.employee.employee_profile.remainder, icon: clockIcon, },
        { title: locale.human_resource.employee.employee_profile.profile, icon: userIcon, },
        { title: locale.human_resource.employee.employee_profile.history, icon: historyIcon },]
    },
    {
        title: locale.human_resource.employee.third_title,
        subTitle: locale.human_resource.employee.sub_title_management,
        icon: [
            { title: locale.human_resource.employee.employee_management.edit, icon: editIcon },
            { title: locale.human_resource.employee.employee_management.permission, icon: permissionIcon },]
    }

]

export const tabs = [
    { title: locale.human_resource.tabs.manage, image: tabFsStep, iconA: tabActiveFsIcon, icon: tabFsIcon },
    { title: locale.human_resource.tabs.edit, image: tabScStep, iconA: tabActiveScIcon, icon: tabScIcon },
    { title: locale.human_resource.tabs.move, image: tabTdStep, iconA: tabActiveTdIcon, icon: tabTdIcon },
]



